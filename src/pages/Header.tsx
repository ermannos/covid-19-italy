import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub as GitHubIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  subtitle: {
    lineHeight: 'normal',
  },
  github: {
    color: 'white',
  },
  link: {
    color: 'white',
  },
}));

type TitleProps = {
  title: string;
  subtitle: string;
  linkName: string;
  link: string;
};

const Header: React.FC<TitleProps> = ({ title, subtitle, linkName, link }) => {
  const classes = useStyles();
  const history = useHistory();

  const openGitHub = useCallback(() => {
    window.open('https://github.com/ermannos/covid-19-italy', '_new');
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.title}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="overline" className={classes.subtitle}>
            {subtitle}
          </Typography>
        </div>

        <Button
          className={classes.link}
          color="inherit"
          onClick={() => {
            history.push(link);
          }}
        >
          {linkName}
        </Button>
        <IconButton className={classes.github} onClick={openGitHub} title="GitHub repository">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
