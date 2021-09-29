import React, { useContext } from 'react';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    paddingBottom: 15,
    width: '100%',
  },
  label: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
  },
  radio: {
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default function SortOrder() {
  const classes = useStyles();
  const { sortValue, setSortValue } = useContext(SWContext);

  const handleChange = ({ target }) => {
    setSortValue(target.value);
  };

  return (
    <FormControl className={classes.box}>
      <FormLabel className={classes.label}>
        Order Ascending or Decreasing?
      </FormLabel>
      <RadioGroup
        className={classes.radio}
        row
        name="sort"
        value={sortValue}
        onChange={handleChange}
      >
        <FormControlLabel
          value="ASC"
          control={<Radio color="primary" />}
          label="ASC"
        />
        <FormControlLabel
          value="DESC"
          control={<Radio color="primary" />}
          label="DESC"
        />
      </RadioGroup>
    </FormControl>
  );
}
