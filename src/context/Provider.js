import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Context from './SWContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const [columnOrder, setColumnOrder] = useState('name');
  const [sortValue, setSortValue] = useState('ASC');

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { columnOrder: 'name', sortValue: 'ASC' },
  });

  const addNewFilter = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value },
      ],
    });
    setColumnFilter('');
    setComparisonFilter('');
    setValueFilter('');
  };

  const removeNumericFilter = (removedFilter) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter(
        (filter) => filter.column !== removedFilter,
      ),
    });
  };

  const setSort = () => {
    setFilters({ ...filters, order: { columnOrder, sortValue } });
  };

  const [columns] = useState([
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ]);

  const context = {
    data,
    setData,
    filters,
    setFilters,
    columns,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    addNewFilter,
    removeNumericFilter,
    columnOrder,
    setColumnOrder,
    sortValue,
    setSortValue,
    setSort,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
