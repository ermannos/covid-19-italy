/* eslint-disable import/no-mutable-exports */
import axios from 'axios';
import { StatoVaccinazioni, Somministrazione, Consegna } from '../types/vaccini';

let vaccines: StatoVaccinazioni[] = [];
let somministrazioni: Somministrazione[] = [];
let consegne: Consegna[] = [];

const loadVaccini = (): Promise<StatoVaccinazioni[]> => {
  return axios
    .get(
      'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json'
    )
    .then(response => response.data)
    .then(json => {
      const vaxx: StatoVaccinazioni[] = [];
      json.data.forEach(d => {
        const vax: StatoVaccinazioni = {
          index: d.index,
          area: d.area,
          dosiSomministrate: d.dosi_somministrate,
          dosiConsegnate: d.dosi_consegnate,
          percentualeSomministrazione: d.percentuale_somministrazione,
          ultimoAggiornamento: d.ultimo_aggiornamento,
        };
        vaxx.push(vax);
      });
      return vaxx;
    });
};

const loadSomministrazioni = (): Promise<Somministrazione[]> => {
  return axios
    .get(
      'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-summary-latest.json'
    )
    .then(response => response.data)
    .then(json => {
      const ss: Somministrazione[] = [];
      json.data.forEach(d => {
        const s: Somministrazione = {
          index: d.index,
          area: d.area,
          dataSomministrazione: d.data_somministrazione,
          totale: d.totale,
          sessoMaschile: d.sesso_maschile,
          sessoFemminile: d.sesso_femminile,
          primaDose: d.prima_dose,
          secondaDose: d.seconda_dose,
          doseBooster: d.dose_addizionale_booster,
        };
        ss.push(s);
      });
      return ss;
    });
};

const loadConsegne = (): Promise<Consegna[]> => {
  return axios
    .get(
      'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/consegne-vaccini-latest.json'
    )
    .then(response => response.data)
    .then(json => {
      const cc: Consegna[] = [];
      json.data.forEach(d => {
        const c: Consegna = {
          index: d.index,
          area: d.area,
          fornitore: d.fornitore.replace('Pfizer/BioNTech', 'Pfizer').replace('(AstraZeneca)', ''),
          dataConsegna: d.data_consegna,
          numeroDosi: d.numero_dosi,
        };
        cc.push(c);
      });
      return cc;
    });
};

const refresh = (): Promise<StatoVaccinazioni[]> => {
  return loadVaccini().then(vaxx => {
    vaccines = vaxx;
    return vaccines;
  });
};

const refreshSomministrazioni = (): Promise<Somministrazione[]> => {
  return loadSomministrazioni().then(ss => {
    somministrazioni = ss;
    return somministrazioni;
  });
};

const refreshConsegne = (): Promise<Consegna[]> => {
  return loadConsegne().then(cc => {
    consegne = cc;
    return consegne;
  });
};

const getSomministrazioniByRegion = (regionCode: string): Somministrazione[] => {
  return somministrazioni
    .filter(s => s.area === regionCode)
    .sort((a, b) => (a.dataSomministrazione > b.dataSomministrazione ? 1 : -1));
};

const getStatusByRegionType = (): Somministrazione[] => {
  const status = {};
  somministrazioni.forEach(s => {
    if (!status[s.area]) {
      status[s.area] = {
        ...s,
        dataSomministrazione: undefined,
      };
    } else {
      const a: Somministrazione = status[s.area];
      a.primaDose += s.primaDose;
      a.doseBooster += s.doseBooster;
      a.secondaDose += s.secondaDose;
      a.sessoFemminile += s.sessoFemminile;
      a.sessoMaschile += s.sessoMaschile;
      a.totale += s.totale;
    }
  });
  const values: Somministrazione[] = Object.values(status);
  return values.sort((a, b) => (a.area > b.area ? 1 : -1));
};

const getConsegneByRegion = (regionCode: string): Consegna[] => {
  return consegne
    .filter(s => s.area === regionCode)
    .sort((a, b) => (a.dataConsegna > b.dataConsegna ? 1 : -1));
};

const getTotaleConsegneBySupplier = (): Consegna[] => {
  const map = {};
  consegne.forEach(c => {
    if (!map[c.fornitore]) {
      map[c.fornitore] = { ...c, index: 0, dataConsegna: '', area: '' };
    } else {
      map[c.fornitore].numeroDosi += c.numeroDosi;
    }
  });
  return Object.values(map);
};

export {
  refresh,
  refreshSomministrazioni,
  refreshConsegne,
  vaccines,
  somministrazioni,
  consegne,
  getSomministrazioniByRegion,
  getConsegneByRegion,
  getStatusByRegionType,
  getTotaleConsegneBySupplier,
};
