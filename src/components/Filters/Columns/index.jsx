import React, { useContext } from 'react';

import { FormControl, TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    display: 'block',
    paddingBottom: 15,

    '@media (max-width: 584px)': {
      width: '100%',
    },
  },
  select: {
    minWidth: 180,
    width: '100%',
  },
});

const ColumnFilter = () => {
  const classes = useStyles();
  const { columns, columnFilter, setColumnFilter, filters } =
    useContext(SWContext);
  let newOptions = columns;
  filters.filterByNumericValues.forEach((filter) => {
    newOptions = newOptions.filter((option) => filter.column !== option);
  });

  const handleChange = ({ target }) => setColumnFilter(target.value);

  return (
    <FormControl className={classes.box}>
      <TextField
        id="columns"
        select
        label="Columns"
        value={columnFilter}
        onChange={handleChange}
        className={classes.select}
        variant="outlined"
        helperText="Select a column to compare"
      >
        {newOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default ColumnFilter;
