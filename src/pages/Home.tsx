/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Typography,
  Slider,
  Tooltip as MUITooltip,
  Button,
} from '@material-ui/core';
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
import { refresh, getByRegionCode, nationalData } from '../data/dataloader';
import Regioni from '../data/regioni';
import DataPoint from '../types/datapoint';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 3),
  },
  formControl: {
    minWidth: 200,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  lastUpdate: {
    textAlign: 'right',
    padding: theme.spacing(1),
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    backgroundColor: '#c0c0c0',
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
  11: { value: 11, description: '% positivi/tamponi giornalieri', field: 'positiviTamponi' },
};

interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;
  return (
    <MUITooltip open={open} enterTouchDelay={0} placement="top" title={value} arrow>
      {children}
    </MUITooltip>
  );
}

const Home: React.FC = () => {
  const classes = useStyles();
  const [regione, setRegione] = useState(99);
  const [grafico, setGrafico] = useState(1);
  const [datapoints, setDatapoints] = useState<DataPoint[]>();
  const [range, setRange] = useState([0, 100]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const history = useHistory();

  useEffect(() => {
    refresh().then(() => {
      setMin(0);
      setMax(nationalData.length - 1);
      setRange([0, nationalData.length - 1]);

      setRegione(99);
    });
  }, []);

  useEffect(() => {
    if (regione) {
      if (regione === 99) {
        setDatapoints(nationalData);
      } else {
        setDatapoints(getByRegionCode(regione));
      }
    }
  }, [regione]);

  const onChangeRegione = evt => {
    setRegione(evt.target.value);
  };

  const onChangeGrafico = evt => {
    setGrafico(evt.target.value);
  };

  const chartData = useMemo(() => {
    if (!datapoints) return [];
    return datapoints
      .filter((p, i) => i >= range[0] && i <= range[1])
      .map(p => ({
        data: moment(p.data).format('DD.MM.YYYY'),
        value: p[grafici[grafico].field],
      }));
  }, [datapoints, grafico, range]);

  const selectedRegione = useMemo(() => {
    return Regioni.find(r => r.codiceRegione === regione);
  }, [regione]);

  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xl={6} lg={8} md={8} sm={7} xs={12}>
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

            {regione === 99 ? null : (
              <FormControl variant="outlined" size="small" className={classes.formControl}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    history.push(`/regione/${selectedRegione?.codiceRegione}`);
                  }}
                >
                  Focus {selectedRegione?.denominazioneRegione}
                </Button>
              </FormControl>
            )}
          </Grid>

          <Grid item xl={6} lg={4} md={4} sm={5} xs={12}>
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
            <Grid item xs={12} style={{ marginTop: '24px' }}>
              <Slider
                value={range}
                min={min}
                max={max}
                valueLabelDisplay="on"
                onChange={(event, value) => {
                  if (Array.isArray(value)) setRange(value);
                }}
                ValueLabelComponent={ValueLabelComponent}
                valueLabelFormat={x =>
                  nationalData && nationalData.length
                    ? moment(nationalData[x].data).format('DD.MM.YYYY')
                    : x
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.footer}>
        Fonte dati:{' '}
        <a href="https://github.com/pcm-dpc/COVID-19" target="_new">
          Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile
        </a>
      </div>
    </>
  );
};

export default Home;
