/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect, useState, useMemo } from 'react';
import { Container, FormControl, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import moment from 'moment';
import { refresh, getByRegionCode } from '../data/dataloader';
import Regioni from '../data/regioni';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 3),
  },
  formControl: {
    minWidth: 200,
  },
  lastUpdate: {
    textAlign: 'right',
    padding: theme.spacing(2),
  },
}));

const grafici = {
  1: { value: 1, description: 'Pazienti degenti', field: 'ricoveratiConSintomi' },
  2: { value: 2, description: 'Pazienti intensiva', field: 'terapiaIntensiva' },
  3: { value: 3, description: 'Totale degenti', field: 'totaleOspedalizzati' },
  4: { value: 4, description: 'Decessi giornalieri', field: 'deceduti' },
  5: { value: 5, description: 'Decessi totali', field: 'decedutiTotali' },
  6: { value: 6, description: 'Tamponi giornalieri', field: 'tamponi' },
  7: { value: 7, description: 'Tamponi totali', field: 'tamponiTotali' },
  8: { value: 8, description: 'Nuovi positivi', field: 'nuoviPositivi' },
  9: { value: 9, description: 'Totale positivi', field: 'totalePositivi' },
  10: { value: 10, description: 'Totale casi', field: 'totaleCasi' },
  11: { value: 11, description: 'Percentuale di positivi giornalieri', field: 'positiviTamponi' },
};

const Home: React.FC = () => {
  const classes = useStyles();
  const [regione, setRegione] = useState(0);
  const [grafico, setGrafico] = useState(1);
  const [datapoints, setDatapoints] = useState<DataPoint[]>();

  useEffect(() => {
    refresh().then(() => {
      setRegione(3);
    });
  }, []);

  useEffect(() => {
    if (regione) setDatapoints(getByRegionCode(regione));
  }, [regione]);

  const onChangeRegione = evt => {
    setRegione(evt.target.value);
  };

  const onChangeGrafico = evt => {
    setGrafico(evt.target.value);
  };

  const chartData = useMemo(() => {
    if (!datapoints) return [];
    return datapoints.map(p => ({
      data: moment(p.data).format('DD.MM.YYYY'),
      value: p[grafici[grafico].field],
    }));
  }, [datapoints, grafico]);

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
          <FormControl variant="outlined" size="small" className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={regione}
              onChange={onChangeRegione}
              placeholder="Regione"
            >
              {Regioni.map(r => (
                <MenuItem key={`reg-${r.codiceRegione}`} value={r.codiceRegione}>
                  {r.denominazioneRegione}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
          <FormControl variant="outlined" size="small" className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={grafico}
              onChange={onChangeGrafico}
              placeholder="Grafico"
            >
              {Object.values(grafici).map(g => (
                <MenuItem key={`gf-${g.value}`} value={g.value}>
                  {g.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xl={8} lg={8} md={6} sm={4} xs={12}>
          <div className={classes.lastUpdate}>
            <Typography>
              Ultimo aggiornamento:{' '}
              {datapoints && datapoints.length
                ? moment(datapoints[datapoints.length - 1].data).format('DD/MM/YYYY')
                : '-'}
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <ResponsiveContainer width="100%" height={700}>
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="data" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                name={grafici[grafico].description}
                dataKey="value"
                stroke={blue[900]}
                fill={blue[700]}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center', fontSize: 'smaller' }}>
          Data source:{' '}
          <a href="https://github.com/pcm-dpc/COVID-19" target="_new">
            Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
