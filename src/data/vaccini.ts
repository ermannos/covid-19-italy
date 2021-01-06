/* eslint-disable import/no-mutable-exports */
import axios from 'axios';
import Vaccino from '../types/vaccini';

let vaccines: Vaccino[] = [];

const loadVaccini = (): Promise<Vaccino[]> => {
  return axios
    .get(
      'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json'
    )
    .then(response => response.data)
    .then(json => {
      const vaxx: Vaccino[] = [];
      json.data.forEach(d => {
        const vax: Vaccino = {
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

const refresh = (): Promise<Vaccino[]> => {
  return loadVaccini().then(vaxx => {
    vaccines = vaxx;
    return vaccines;
  });
};

export { refresh, vaccines };
