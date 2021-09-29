import React, { useContext } from 'react';

import { MenuItem, TextField, FormControl } from '@material-ui/core';
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

const options = ['greater than', 'equal to', 'less than'];

export default function ComparisonFilter() {
  const classes = useStyles();
  const { comparisonFilter, setComparisonFilter } = useContext(SWContext);

  const handleChange = ({ target }) => setComparisonFilter(target.value);

  return (
    <FormControl className={classes.box}>
      <TextField
        id="columns"
        select
        label="Comparison"
        value={comparisonFilter}
        onChange={handleChange}
        className={classes.select}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}
