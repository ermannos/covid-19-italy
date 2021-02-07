/* eslint-disable no-param-reassign */
import axios from 'axios';
import { calendarFormat } from 'moment';
import DataPoint from '../types/datapoint';

const regionalUrl =
  'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json';
const nationalUrl =
  'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json';

const regionalData: DataPoint[] = [];
const nationalData: DataPoint[] = [];

const loadData = (url: string): Promise<DataPoint[]> => {
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
          deceduti: 0,
          decedutiTotali: row.deceduti,
          casiDaSospettoDiagnostico: row.casi_da_sospetto_diagnostico,
          casiDaScreening: row.casi_da_screening,
          totaleCasi: row.totale_casi,
          tamponi: 0,
          tamponiTotali: row.tamponi,
          positiviTamponi: 0,
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

const loadRegionalData = (): Promise<DataPoint[]> => {
  return loadData(regionalUrl);
};

const loadNationalData = (): Promise<DataPoint[]> => {
  return loadData(nationalUrl);
};

const calculateDerivedData = (point: DataPoint, previousPoint?: DataPoint): DataPoint => {
  return {
    ...point,
    deceduti: previousPoint ? point.decedutiTotali - previousPoint.decedutiTotali : 0,
    tamponi: point.tamponiTotali - (previousPoint ? previousPoint.tamponiTotali : 0),
    totaleOspedalizzati: point.terapiaIntensiva + point.ricoveratiConSintomi,
    positiviTamponi:
      previousPoint && point.tamponiTotali > previousPoint.tamponiTotali
        ? Math.round(
            (point.nuoviPositivi / (point.tamponiTotali - previousPoint.tamponiTotali)) * 10000
          ) / 100
        : 0,
  };
};

const getByRegionCode = (regionCode: number): DataPoint[] => {
  const points = regionalData.filter(point => point.codiceRegione === regionCode);

  let previousPoint: DataPoint;
  return points.map(p => {
    const newPoint = calculateDerivedData(p, previousPoint);
    previousPoint = p;
    return newPoint;
  });
};

const getLastByRegionCode = (regionCode: number): DataPoint => {
  const data = getByRegionCode(regionCode);
  return data[data.length - 1];
};

const refresh = (): Promise<void> => {
  return Promise.all([loadRegionalData(), loadNationalData()]).then(([rData, nData]) => {
    regionalData.splice(0, regionalData.length);
    nationalData.splice(0, nationalData.length);

    rData.forEach(point => {
      regionalData.push(point);
    });

    let previousPoint: DataPoint;
    nData.forEach(point => {
      nationalData.push(calculateDerivedData(point, previousPoint));
      previousPoint = point;
    });
  });
};

export { refresh, getByRegionCode, getLastByRegionCode, nationalData };
