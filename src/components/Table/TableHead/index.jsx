import React, { useContext } from 'react';

import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const StyledTableCell = withStyles(() => ({
  head: {
    background: '#55608f',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
}))(TableCell);

export default function Head() {
  const { data } = useContext(SWContext);

  function renderHeaderKeys(obj) {
    if (obj) {
      const headerKeys = Object.keys(obj).filter((key) => key !== 'residents');

      return headerKeys.map((key, index) => (
        <StyledTableCell key={key} align={index > 0 ? 'right' : 'left'}>
          {key}
        </StyledTableCell>
      ));
    }
    return [];
  }

  return (
    <TableHead>
      <TableRow>{renderHeaderKeys(data[0])}</TableRow>
    </TableHead>
  );
}
