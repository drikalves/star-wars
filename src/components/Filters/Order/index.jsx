import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ColumnOrder from './Columns';
import SortOrder from './Sort';
import OrderButton from './OrderButton';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function OrderFilter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ColumnOrder />
      <SortOrder />
      <OrderButton />
    </div>
  );
}
