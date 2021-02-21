import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

type Props = {
  title: string;
  value: number;
  percent?: number;
  delta?: number;
  icon?: React.ReactNode;
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    minHeight: '80px',
  },
  title: {
    color: grey[500],
  },
  paperContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    flexGrow: 1,
    textAlign: 'right',
    fontSize: '1.7rem',
    fontWeight: 'bold',
  },
  addendum: {
    fontSize: '1.3rem',
  },
  bigIcon: {
    fontSize: '400%',
  },
}));

const DataPaper: React.FC<Props> = ({ title, value, icon, percent, delta }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>
        <strong>{title}</strong>
      </Typography>
      <div className={classes.paperContent}>
        {icon || <span>&nbsp;</span>}
        <span className={classes.value}>
          {new Intl.NumberFormat().format(value)}
          {percent ? <span className={classes.addendum}>{` (${percent.toFixed(1)}%)`}</span> : ''}
          {delta ? (
            <span className={classes.addendum}>
              {` (${delta > 0 ? '+' : ''}${Intl.NumberFormat().format(delta)})`}
            </span>
          ) : (
            ''
          )}
        </span>
      </div>
    </Paper>
  );
};

export default DataPaper;
