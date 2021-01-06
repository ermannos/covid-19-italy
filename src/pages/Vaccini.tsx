/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Hidden, useMediaQuery } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { blue, deepOrange } from '@material-ui/core/colors';
import moment from 'moment';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';
import { refresh, vaccines } from '../data/vaccini';
import Regioni from '../data/regioni';
import Vaccino from '../types/vaccini';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 3),
  },
  buttons: {
    textAlign: 'center',
  },
  lastUpdate: {
    textAlign: 'right',
    padding: theme.spacing(2),
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    backgroundColor: '#c0c0c0',
  },
}));

const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
    '&$selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    padding: theme.spacing(0.75, 2),
  },
  selected: {},
});

const StyledToggleButton = withStyles(styles, { withTheme: true })(ToggleButton);

const Vaccini: React.FC = () => {
  const classes = useStyles();
  const [vacc, setVacc] = useState(vaccines);
  const [view, setView] = useState('values');
  const [regionMap, setRegionMap] = useState({});

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  console.log('XS', isXs);
  console.log('SM', isSm);

  const loadRegioni = useCallback(() => {
    const map = {};
    Regioni.forEach(r => {
      map[r.abbreviazione] = r.denominazioneRegione;
    });
    setRegionMap(map);
  }, []);

  useEffect(() => {
    loadRegioni();
    refresh().then(vaxx => {
      setVacc(vaxx);
    });
  }, [loadRegioni]);

  const chartData = useMemo(() => {
    return vacc
      .sort((a, b) => {
        return a.area.localeCompare(b.area);
      })
      .map(v => ({
        regione: regionMap[v.area] || v.area,
        'Dosi consegnate': v.dosiConsegnate,
        'Dosi somministrate': v.dosiSomministrate,
        'Percentuale somministrazioni': v.percentualeSomministrazione,
      }));
  }, [vacc, regionMap]);

  const lastUpdate = useMemo(() => {
    let date;
    vacc.forEach(v => {
      const d = moment(v.ultimoAggiornamento);
      if (!date || date.isBefore(d)) {
        date = d;
      }
    });
    return date;
  }, [vacc]);

  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Hidden xsDown>
            <Grid item xs={12} sm={3} />
          </Hidden>
          <Grid item xs={12} sm={6}>
            <div className={classes.buttons}>
              <ToggleButtonGroup
                size="medium"
                value={view}
                exclusive
                onChange={(evt, val) => {
                  setView(val);
                }}
              >
                <StyledToggleButton value="values">Valori</StyledToggleButton>
                <StyledToggleButton value="percent">Percentuali</StyledToggleButton>
              </ToggleButtonGroup>
            </div>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} sm={3} className={classes.lastUpdate}>
              Ultimo aggiornamento: {lastUpdate ? lastUpdate.format('DD/MM/YYYY') : ''}
            </Grid>
          </Hidden>
        </Grid>

        <ResponsiveContainer width="100%" height={isXs ? 500 : isSm ? 600 : 700}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barGap={isXs ? -3 : isSm ? -7 : -15}
          >
            <XAxis dataKey="regione" angle={-60} textAnchor="end" height={130} interval={0} />
            <YAxis width={view === 'values' ? 50 : 30} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            {view === 'values' ? (
              <Bar dataKey="Dosi consegnate" stackId="b" fill={blue[700]} stroke={blue[900]} />
            ) : null}
            {view === 'values' ? (
              <Bar dataKey="Dosi somministrate" stackId="a" fill={blue[400]} stroke={blue[600]} />
            ) : (
              <Bar dataKey="Percentuale somministrazioni" fill={blue[700]} stroke={blue[900]}>
                {isSm ? null : (
                  <LabelList
                    dataKey="Percentuale somministrazioni"
                    position="top"
                    formatter={v => `${Number.parseFloat(v).toFixed(1)}%`}
                  />
                )}
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </Container>

      <div className={classes.footer}>
        Fonte dati:{' '}
        <a href="https://github.com/italia/covid19-opendata-vaccini" target="_new">
          Commissario straordinario per l&apos;emergenza Covid-19
        </a>
      </div>
    </>
  );
};

export default Vaccini;
