import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

type Props = {
  title: string;
  value: number;
  percent?: number;
  icon?: React.ReactNode;
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    minHeight: '100px',
  },
  title: {
    color: grey[500],
  },
  paperContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& *:last-child': {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      textAlign: 'right',
      fontSize: '170%',
      fontWeight: 'bold',
    },
  },
  bigIcon: {
    fontSize: '400%',
  },
}));

const DataPaper: React.FC<Props> = ({ title, value, icon, percent }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>
        <strong>{title}</strong>
      </Typography>
      <div className={classes.paperContent}>
        {icon || <span>&nbsp;</span>}
        <span>
          {new Intl.NumberFormat().format(value)}
          {percent ? ` (${percent.toFixed(1)}%)` : ''}
        </span>
      </div>
    </Paper>
  );
};

export default DataPaper;
