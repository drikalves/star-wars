import * as React from 'react';

import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Starwars } from '../../assets/starwars.svg';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: '0 2px 4px rgb(30, 60, 90, 0.1)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  typography: {
    '@media (max-width:584px)': {
      display: 'none',
    },
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.toolbar}>
          <Starwars />
          <Typography
            className={classes.typography}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Discover the world of star wars
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
