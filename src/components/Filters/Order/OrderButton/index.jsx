import React, { useContext } from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../../context/SWContext';

const useStyles = makeStyles({
  btn: {
    padding: '10px 30px',
    width: '100%',
  },
});

export default function OrderButton() {
  const classes = useStyles();
  const { setSort } = useContext(SWContext);

  return (
    <Button
      className={classes.btn}
      onClick={() => setSort()}
      type="button"
      color="primary"
      variant="contained"
    >
      Order
    </Button>
  );
}
