import React, { useContext, useEffect } from 'react';

import { Table as TableBox, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../context/SWContext';

import { api } from '../../services';

import TableBody from './TableBody';
import TableHead from './TableHead';

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    width: '90%',

    '@media (max-width: 584px)': {
      width: '100%',
    },
  },
  table: {
    whiteSpace: 'nowrap',
  },
});

export default function Table() {
  const classes = useStyles();

  const { setData } = useContext(SWContext);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await api.get('/api/planets/');
      setData(response.data.results);
    }

    fetchPlanets();
  }, [setData]);

  return (
    <TableContainer className={classes.root}>
      <TableBox className={classes.table}>
        <TableHead />
        <TableBody />
      </TableBox>
    </TableContainer>
  );
}
