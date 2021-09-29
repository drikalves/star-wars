import React, { useContext } from 'react';

import { Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 40px 10px 20px',
    width: '100%',
  },
  input: {
    fontSize: 18,
    width: '100%',
  },
});

export default function SearchBar() {
  const classes = useStyles();
  const { filters, setFilters } = useContext(SWContext);

  return (
    <Paper className={classes.box}>
      <InputBase
        className={classes.input}
        placeholder="Search by planet name"
        onChange={({ target }) =>
          setFilters({ ...filters, filterByName: { name: target.value } })
        }
      />

      <SearchIcon color="disabled" fontSize="large" />
    </Paper>
  );
}
