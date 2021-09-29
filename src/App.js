import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import Header from './components/Header';
import Provider from './context/Provider';
import Filters from './components/Filters';
import ActiveFilters from './components/ActiveFilters';
import Table from './components/Table';

const useStyles = makeStyles({
  box: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '60px 15px',
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider>
      <Header />
      <main className={classes.box}>
        <Filters />
        <ActiveFilters />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
