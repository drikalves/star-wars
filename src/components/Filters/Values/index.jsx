import React, { useContext } from 'react';

import { TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    display: 'block',
    paddingBottom: 15,
    width: 'min-content',

    '@media (max-width: 584px)': {
      width: '100%',
    },
  },
  textfield: {
    minWidth: 180,
    width: '100%',
  },
});

export default function Values() {
  const classes = useStyles();
  const { valueFilter, setValueFilter } = useContext(SWContext);

  return (
    <FormControl className={classes.box}>
      <TextField
        className={classes.textfield}
        label="Value"
        type="number"
        value={valueFilter}
        onChange={({ target }) => setValueFilter(target.value)}
        variant="outlined"
        helperText="Enter a value to compare"
      />
    </FormControl>
  );
}
