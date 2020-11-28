import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub as GitHubIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  github: {
    color: 'white',
  },
}));

type TitleProps = {
  title: string;
};

const Header: React.FC<TitleProps> = ({ title }) => {
  const classes = useStyles();

  const openGitHub = useCallback(() => {
    window.open('https://github.com/ermannos/covid-19-italy', '_new');
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <IconButton className={classes.github} onClick={openGitHub} title="GitHub repository">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
