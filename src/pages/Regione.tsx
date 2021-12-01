import React, { useMemo, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Regioni from '../data/regioni';
import Header from './Header';
import {
  refreshSomministrazioni,
  getSomministrazioniByRegion,
  refreshConsegne,
  getConsegneByRegion,
} from '../data/vaccini';
import { refresh, getByRegionCode } from '../data/dataloader';
import DataPaper from '../components/DataPaper';
import DataPoint from '../types/datapoint';
import { Somministrazione, Consegna } from '../types/vaccini';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 600,
    padding: theme.spacing(2, 3),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    fontSize: '60%',
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    backgroundColor: '#c0c0c0',
  },
}));

interface ParamTypes {
  code: string;
}

const Regione: React.FC = () => {
  const classes = useStyles();
  const code = Number.parseInt(useParams<ParamTypes>().code, 10);
  const [covidData, setCovidData] = useState<DataPoint[]>([]);
  const [somministrazioni, setSomministrazioni] = useState<Somministrazione[]>([]);
  const [consegne, setConsegne] = useState<Consegna[]>([]);

  const regione = useMemo(() => {
    return Regioni.find(r => r.codiceRegione === code);
  }, [code]);

  useEffect(() => {
    refresh().then(() => {
      setCovidData(getByRegionCode(code));
    });
    refreshSomministrazioni().then(() => {
      setSomministrazioni(getSomministrazioniByRegion(regione?.abbreviazione || '?'));
    });
    refreshConsegne().then(() => {
      setConsegne(getConsegneByRegion(regione?.abbreviazione || '?'));
    });
  }, [code, regione]);

  const previousData: DataPoint | undefined = covidData.length
    ? covidData[covidData.length - 2]
    : undefined;
  const lastData: DataPoint | undefined = covidData.length
    ? covidData[covidData.length - 1]
    : undefined;
  const previousSomministrazione: Somministrazione | undefined = somministrazioni.length
    ? somministrazioni[somministrazioni.length - 2]
    : undefined;
  const lastSomministrazione: Somministrazione | undefined = somministrazioni.length
    ? somministrazioni[somministrazioni.length - 1]
    : undefined;

  const lastConsegna1: Consegna | undefined =
    consegne.length >= 4 ? consegne[consegne.length - 4] : undefined;
  const lastConsegna2: Consegna | undefined =
    consegne.length >= 3 ? consegne[consegne.length - 3] : undefined;
  const lastConsegna3: Consegna | undefined =
    consegne.length >= 2 ? consegne[consegne.length - 2] : undefined;
  const lastConsegna4: Consegna | undefined = consegne.length
    ? consegne[consegne.length - 1]
    : undefined;

  return (
    <>
      <Header
        title="Covid-19 Italia"
        subtitle={`Focus ${regione?.denominazioneRegione}`}
        linkName="Epidemia"
        link={`/epidemia/${code}`}
      />
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Situazione epidemia{' '}
          <span className={classes.subtitle}>
            {lastData ? ` al ${moment(lastData.data).format('DD/MM/YYYY')}` : ''}
          </span>
        </Typography>
        <Grid container spacing={2} className={classes.section}>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Pazienti degenti"
              value={lastData?.ricoveratiConSintomi || 0}
              delta={
                (lastData?.ricoveratiConSintomi || 0) - (previousData?.ricoveratiConSintomi || 0)
              }
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Pazienti intensiva"
              value={lastData?.terapiaIntensiva || 0}
              delta={(lastData?.terapiaIntensiva || 0) - (previousData?.terapiaIntensiva || 0)}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Pazienti deceduti"
              value={lastData?.deceduti || 0}
              delta={(lastData?.deceduti || 0) - (previousData?.deceduti || 0)}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Tamponi effettuati"
              value={lastData?.tamponi || 0}
              delta={(lastData?.tamponi || 0) - (previousData?.tamponi || 0)}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Tamponi positivi"
              value={lastData?.nuoviPositivi || 0}
              percent={lastData?.positiviTamponi || 0}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Attualmente positivi"
              value={lastData?.totalePositivi || 0}
              delta={(lastData?.totalePositivi || 0) - (previousData?.totalePositivi || 0)}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" className={classes.sectionTitle}>
          Campagna vaccinale
          <span className={classes.subtitle}>
            {lastData
              ? ` al ${moment(lastSomministrazione?.dataSomministrazione).format('DD/MM/YYYY')}`
              : ''}
          </span>
        </Typography>
        <Grid container spacing={2} className={classes.section}>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Vaccini somministrati"
              value={lastSomministrazione?.totale || 0}
              delta={(lastSomministrazione?.totale || 0) - (previousSomministrazione?.totale || 0)}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Somm. prima dose"
              value={lastSomministrazione?.primaDose || 0}
              delta={
                (lastSomministrazione?.primaDose || 0) - (previousSomministrazione?.primaDose || 0)
              }
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Somm. seconda dose"
              value={lastSomministrazione?.secondaDose || 0}
              delta={
                (lastSomministrazione?.secondaDose || 0) -
                (previousSomministrazione?.secondaDose || 0)
              }
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title="Somm. dose booster"
              value={lastSomministrazione?.doseBooster || 0}
              delta={
                (lastSomministrazione?.doseBooster || 0) -
                (previousSomministrazione?.doseBooster || 0)
              }
            />
          </Grid>
        </Grid>

        <Typography variant="h4" className={classes.sectionTitle}>
          Ultime consegne vaccini
        </Typography>
        <Grid container spacing={2} className={classes.section}>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title={
                lastConsegna1
                  ? `${lastConsegna1.fornitore} - ${moment(lastConsegna1.dataConsegna).format(
                      'DD MMM'
                    )}`
                  : ''
              }
              value={lastConsegna2?.numeroDosi || 0}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title={
                lastConsegna2
                  ? `${lastConsegna2.fornitore} - ${moment(lastConsegna2.dataConsegna).format(
                      'DD MMM'
                    )}`
                  : ''
              }
              value={lastConsegna2?.numeroDosi || 0}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title={
                lastConsegna3
                  ? `${lastConsegna3.fornitore} - ${moment(lastConsegna3.dataConsegna).format(
                      'DD MMM'
                    )}`
                  : ''
              }
              value={lastConsegna3?.numeroDosi || 0}
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <DataPaper
              title={
                lastConsegna4
                  ? `${lastConsegna4.fornitore} - ${moment(lastConsegna4.dataConsegna).format(
                      'DD MMM'
                    )}`
                  : ''
              }
              value={lastConsegna4?.numeroDosi || 0}
            />
          </Grid>
        </Grid>
      </Container>

      <div className={classes.footer}>
        Fonti dati:{' '}
        <a href="https://github.com/pcm-dpc/COVID-19" target="_new">
          Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile
        </a>
        <br />
        <a href="https://github.com/italia/covid19-opendata-vaccini" target="_new">
          Commissario straordinario per l&apos;emergenza Covid-19
        </a>
      </div>
    </>
  );
};

export default Regione;
