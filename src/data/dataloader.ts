import axios from 'axios';
import DataPoint from './datapoint';

const url =
  'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json';

const datapoints: DataPoint[] = [];

const loadAllData = (): Promise<DataPoint[]> => {
  const data: DataPoint[] = [];
  return axios
    .get(url)
    .then(response => response.data)
    .then(json => {
      json.forEach(row => {
        const point: DataPoint = {
          data: row.data,
          stato: row.stato,
          codiceRegione: row.codice_regione,
          denominazioneRegione: row.denominazione_regione,
          lat: row.lat,
          long: row.lang,
          ricoveratiConSintomi: row.ricoverati_con_sintomi,
          terapiaIntensiva: row.terapia_intensiva,
          totaleOspedalizzati: row.totale_ospedalzzati,
          isolamentoDomiciliare: row.isolamento_domiciliare,
          totalePositivi: row.totale_positivi,
          variazioneTotalePositivi: row.variazione_totale_positivi,
          nuoviPositivi: row.nuovi_positivi,
          dimessiGuariti: row.dimessi_guariti,
          deceduti: row.deceduti,
          casiDaSospettoDiagnostico: row.casi_da_sospetto_diagnostico,
          casiDaScreening: row.casi_da_screening,
          totaleCasi: row.totale_casi,
          tamponi: row.tamponi,
          casiTestati: row.casi_testati,
          note: row.note,
        };
        data.push(point);
      });
      return data;
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      return data;
    });
};

const getByRegionCode = (regionCode: number): DataPoint[] => {
  return datapoints.filter(point => point.codiceRegione === regionCode);
};

const refresh = () => {
  return loadAllData().then(points => {
    points.forEach(point => {
      datapoints.push(point);
    });
    return datapoints;
  });
};

export { refresh, datapoints, getByRegionCode };
