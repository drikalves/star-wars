import React, { useContext } from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  btn: {
    display: 'block',
    height: 50,
    padding: '10px 30px',
    width: '100%',
  },
});

export default function FilterButton() {
  const classes = useStyles();
  const { addNewFilter, columnFilter, comparisonFilter, valueFilter } =
    useContext(SWContext);

  return (
    <div className={classes.box}>
      <Button
        className={classes.btn}
        type="button"
        variant="contained"
        color="primary"
        onClick={() =>
          addNewFilter(columnFilter, comparisonFilter, valueFilter)
        }
      >
        Compare
      </Button>
    </div>
  );
}
