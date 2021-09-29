import React, { useContext } from 'react';

import { FormControl, TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    paddingBottom: 15,
    width: '100%',
  },
  select: {
    minWidth: 180,
  },
});

const ColumnOrder = () => {
  const classes = useStyles();
  const { columns, setColumnOrder, columnOrder } = useContext(SWContext);

  const handleColumnChange = ({ target }) => setColumnOrder(target.value);

  return (
    <FormControl className={classes.box}>
      <TextField
        id="columns-order"
        select
        label="Columns"
        value={columnOrder}
        onChange={handleColumnChange}
        className={classes.select}
        variant="outlined"
        helperText="Select a column to order"
      >
        {columns.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default ColumnOrder;
