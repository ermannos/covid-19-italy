import React from 'react';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: blue[900],
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(2, 0),
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      Data source:{' '}
      <a href="https://github.com/pcm-dpc/COVID-19" target="_new">
        Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile
      </a>
    </div>
  );
};

export default Footer;
