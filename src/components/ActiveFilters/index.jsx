import React, { useContext } from 'react';

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import SWContext from '../../context/SWContext';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  activeFilter: {
    padding: '10px 20px',
    color: '#FFF',
  },
  icon: {
    color: '#fff',
  },
});

const StyledIconButton = withStyles(() => ({
  root: {
    marginLeft: 10,
  },
}))(IconButton);

export default function ActiveFilters() {
  const classes = useStyles();
  const {
    filters: { filterByNumericValues },
    removeNumericFilter,
  } = useContext(SWContext);
  return (
    <div className={classes.box}>
      {filterByNumericValues.map((filter) => (
        <div className={classes.activeFilter} key={filter.column}>
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <StyledIconButton
            className={classes.IconButton}
            onClick={() => removeNumericFilter(filter.column)}
          >
            <CloseIcon className={classes.icon} />
          </StyledIconButton>
        </div>
      ))}
    </div>
  );
}
