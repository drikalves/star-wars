import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './NameSearch';
import ColumnFilter from './Columns';
import ComparisonFilter from './Comparison';
import ValueFilter from './Values';
import FilterButton from './FilterButton';
import OrderFilter from './Order';

const useStyles = makeStyles({
  root: {
    background: '#FFF',
    borderRadius: 5,
    maxWidth: 900,
    width: '90%',

    '@media (max-width:584px)': {
      width: '100%',
    },
  },
  title: {
    color: '#999',
    display: 'block',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 26,
    position: 'relative',
    width: '100%',
  },
  filters: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  compare: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
});

export default function Filters() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />
      <div className={classes.filters}>
        <h1 className={classes.title}>Advanced Filter</h1>
        <form className={classes.compare}>
          <ColumnFilter />
          <ComparisonFilter />
          <ValueFilter />
          <FilterButton />
        </form>

        <OrderFilter divider className={classes.order} />
      </div>
    </div>
  );
}
