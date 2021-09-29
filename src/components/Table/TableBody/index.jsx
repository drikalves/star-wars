import React, { useContext } from 'react';

import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const Films = {
  'https://swapi-trybe.herokuapp.com/api/films/1/': 'A New Hope',
  'https://swapi-trybe.herokuapp.com/api/films/2/': 'The Empire Strikes Back',
  'https://swapi-trybe.herokuapp.com/api/films/3/': 'Return of the Jedi',
  'https://swapi-trybe.herokuapp.com/api/films/4/': 'The Phantom Menace',
  'https://swapi-trybe.herokuapp.com/api/films/5/': 'Attack of the Clones',
  'https://swapi-trybe.herokuapp.com/api/films/6/': 'Revenge of the Sith',
};

const filterPlanet = (planetList = [], filter) => {
  const { column, comparison, value } = filter;
  return planetList.filter((planet) => {
    switch (comparison) {
      case 'greater than':
        return Number(planet[column]) > Number(value);
      case 'equal to':
        return Number(planet[column]) === Number(value);
      case 'less than':
        return Number(planet[column]) < Number(value);
      default:
        return planet;
    }
  });
};

const StyledTableCell = withStyles(() => ({
  body: {
    color: '#fff',
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}))(TableRow);

const useStyles = makeStyles({
  films: {
    minWidth: 150,
  },
  film: {
    margin: 0,
  },
});

export default function Body() {
  const classes = useStyles();
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order: { columnOrder, sortValue },
    },
  } = useContext(SWContext);

  const sortByName = (planets) => {
    if (sortValue === 'ASC')
      return planets.sort((a, b) => a.name.localeCompare(b.name));
    return planets.sort((a, b) => b.name.localeCompare(a.name));
  };

  const sortByValue = (planets) => {
    if (sortValue === 'ASC')
      return planets.sort(
        (a, b) => Number(a[columnOrder]) - Number(b[columnOrder]),
      );
    return planets.sort(
      (a, b) => Number(b[columnOrder]) - Number(a[columnOrder]),
    );
  };

  let filteredData = data
    .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  filterByNumericValues.forEach((filter) => {
    filteredData = filterPlanet(filteredData, filter);
  });

  if (columnOrder === 'name') {
    filteredData = sortByName(filteredData);
  } else {
    filteredData = sortByValue(filteredData);
  }

  return (
    <TableBody>
      {filteredData.map((planet) => (
        <StyledTableRow key={planet.name}>
          <StyledTableCell>{planet.name}</StyledTableCell>
          <StyledTableCell>{planet.rotation_period}</StyledTableCell>
          <StyledTableCell>{planet.orbital_period}</StyledTableCell>
          <StyledTableCell>{planet.diameter}</StyledTableCell>
          <StyledTableCell>{planet.climate}</StyledTableCell>
          <StyledTableCell>{planet.gravity}</StyledTableCell>
          <StyledTableCell>{planet.terrain}</StyledTableCell>
          <StyledTableCell>{planet.surface_water}</StyledTableCell>
          <StyledTableCell>{planet.population}</StyledTableCell>
          <StyledTableCell className={classes.films}>
            {planet.films.map((film) => (
              <p key={film} className={classes.film}>
                {Films[film]}
              </p>
            ))}
          </StyledTableCell>
          <StyledTableCell>{planet.created}</StyledTableCell>
          <StyledTableCell>{planet.edited}</StyledTableCell>
          <StyledTableCell>
            <a href={planet.url} target="_blank" rel="noreferrer">
              {planet.url}
            </a>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}
