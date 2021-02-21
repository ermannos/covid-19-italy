/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Hidden, Typography, useMediaQuery } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { blue, grey, lightBlue, pink, lightGreen, orange, purple } from '@material-ui/core/colors';
import {
  LocalShipping as LocalShippingIcon,
  LocalHospital as LocalHospitalIcon,
} from '@material-ui/icons';
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
import { refresh, vaccines, refreshSomministrazioni, getStatusByRegionType } from '../data/vaccini';
import Regioni from '../data/regioni';
import DataPaper from '../components/DataPaper';
import { Somministrazione } from '../types/vaccini';

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
  bigIcon: {
    fontSize: '400%',
  },
  title: {
    color: grey[500],
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    backgroundColor: '#c0c0c0',
  },
  mb2: {
    marginBottom: theme.spacing(2),
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
  const [shipped, setShipped] = useState(0);
  const [given, setGiven] = useState(0);
  const [view, setView] = useState('values');
  const [regionMap, setRegionMap] = useState({});
  const [statusByRegion, setStatusByRegion] = useState<Somministrazione[]>([]);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

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
      let c = 0;
      let s = 0;
      vaxx.forEach(vax => {
        c += vax.dosiConsegnate;
        s += vax.dosiSomministrate;
      });
      setShipped(c);
      setGiven(s);
    });
    refreshSomministrazioni().then(() => {
      setStatusByRegion(getStatusByRegionType());
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

  const chartData2 = useMemo(() => {
    return statusByRegion.map(v => ({
      regione: regionMap[v.area] || v.area,
      ...v,
    }));
  }, [statusByRegion, regionMap]);

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
        <Grid container spacing={2} className={classes.mb2}>
          <Hidden mdDown>
            <Grid item xs={12} sm={6} md={6} lg={3} />
          </Hidden>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DataPaper
              title="Consegnati"
              value={shipped}
              icon={<LocalShippingIcon className={classes.bigIcon} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DataPaper
              title="Somministrati"
              value={given}
              icon={<LocalHospitalIcon className={classes.bigIcon} />}
              percent={shipped === 0 ? 0 : (given * 100) / shipped}
            />
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} sm={6} md={6} lg={3} />
          </Hidden>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.title}>
              <strong>Dati per regione</strong>
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={6} className={classes.lastUpdate}>
              Ultimo aggiornamento: {lastUpdate ? lastUpdate.format('DD/MM/YYYY') : ''}
            </Grid>
          </Hidden>
          <Grid item sm={12}>
            <div className={classes.buttons}>
              <ToggleButtonGroup
                size="medium"
                value={view}
                exclusive
                onChange={(evt, val) => {
                  setView(val);
                }}
              >
                <StyledToggleButton value="values">Cons./som.</StyledToggleButton>
                <StyledToggleButton value="percent">Sommin. (%)</StyledToggleButton>
                <StyledToggleButton value="type">Categoria</StyledToggleButton>
                <StyledToggleButton value="sex">Sesso</StyledToggleButton>
                <StyledToggleButton value="dose">Dose</StyledToggleButton>
              </ToggleButtonGroup>
            </div>
          </Grid>
        </Grid>

        <ResponsiveContainer width="100%" height={isXs ? 500 : isSm ? 600 : 700}>
          <BarChart
            data={view === 'type' || view === 'sex' || view === 'dose' ? chartData2 : chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barGap={isXs ? -3 : isSm ? -7 : -15}
          >
            <XAxis dataKey="regione" angle={-60} textAnchor="end" height={130} interval={0} />
            <YAxis width={view === 'percent' ? 30 : 50} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            {view === 'values' ? (
              <Bar dataKey="Dosi consegnate" stackId="b" fill={blue[700]} stroke={blue[900]} />
            ) : null}
            {view === 'values' ? (
              <Bar dataKey="Dosi somministrate" stackId="a" fill={blue[400]} stroke={blue[600]} />
            ) : null}
            {view === 'percent' ? (
              <Bar
                dataKey="Percentuale somministrazioni"
                fill={lightGreen[700]}
                stroke={lightGreen[900]}
              >
                {isSm ? null : (
                  <LabelList
                    dataKey="Percentuale somministrazioni"
                    position="top"
                    formatter={v => `${Number.parseFloat(v).toFixed(1)}%`}
                  />
                )}
              </Bar>
            ) : null}

            {view === 'type' ? (
              <Bar
                dataKey="categoriaOperatoriSanitariSociosanitari"
                name="Operatori sanitari"
                stackId="a"
                fill={purple[800]}
                stroke={purple[900]}
              />
            ) : null}
            {view === 'type' ? (
              <Bar
                dataKey="categoriaOspitiRsa"
                name="Ospiti RSA"
                stackId="a"
                fill={purple[600]}
                stroke={purple[700]}
              />
            ) : null}
            {view === 'type' ? (
              <Bar
                dataKey="categoriaOver80"
                name="Over 80"
                stackId="a"
                fill={purple[400]}
                stroke={purple[500]}
              />
            ) : null}
            {view === 'type' ? (
              <Bar
                dataKey="categoriaPersonaleNonSanitario"
                name="Personale non sanitario"
                stackId="a"
                fill={purple[200]}
                stroke={purple[300]}
              />
            ) : null}

            {view === 'sex' ? (
              <Bar
                dataKey="sessoMaschile"
                name="Maschi"
                stackId="a"
                fill={lightBlue[400]}
                stroke={lightBlue[600]}
              />
            ) : null}
            {view === 'sex' ? (
              <Bar
                dataKey="sessoFemminile"
                name="Femmine"
                stackId="a"
                fill={pink[300]}
                stroke={pink[500]}
              />
            ) : null}

            {view === 'dose' ? (
              <Bar
                dataKey="primaDose"
                name="Prima dose"
                stackId="a"
                fill={orange[700]}
                stroke={orange[900]}
              />
            ) : null}
            {view === 'dose' ? (
              <Bar
                dataKey="secondaDose"
                name="Seconda dose"
                stackId="a"
                fill={orange[400]}
                stroke={orange[600]}
              />
            ) : null}
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
