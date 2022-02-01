import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Header() {
  const { filterByName,
    setFilterByName,
    data,
    setNewData,
    setFilterByNumericValues,
    filterByNumericValues,
  } = useContext(Context);

  const [filterByNumeric, setFilterByNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [selectsColumn, setSelectsColumn] = useState({
    population: true,
    orbital_period: true,
    diameter: true,
    rotation_period: true,
    surface_water: true,
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFilterByNumeric({ ...filterByNumeric, [name]: value });
  };

  const validationFilter = () => {
    if (filterByNumericValues.length === 0) {
      return setFilterByNumericValues([filterByNumeric]);
    }
    return setFilterByNumericValues([...filterByNumericValues, filterByNumeric]);
  };

  const getSelect = () => {
    setSelectsColumn({ ...selectsColumn, [filterByNumeric.column]: false });
  };

  const setFilter = () => {
    validationFilter();
    getSelect();
    if (filterByNumeric.comparison === 'maior que') {
      return setNewData(data.filter((value) => Number(value[filterByNumeric.column])
        > Number(filterByNumeric.value)));
    }
    if (filterByNumeric.comparison === 'menor que') {
      return setNewData(data.filter((value) => Number(value[filterByNumeric.column])
        < Number(filterByNumeric.value)));
    }
    if (filterByNumeric.comparison === 'igual a') {
      return setNewData(data.filter((value) => Number(value[filterByNumeric.column])
        === Number(filterByNumeric.value)));
    }
    return data;
  };

  const {
    population,
    diameter,
    orbital_period: orbitalPeriod,
    rotation_period: rotationPeriod,
    surface_water: surfaceWater } = selectsColumn;

  return (
    <form>
      <label htmlFor="name-filter">
        <input
          id="name-filter"
          data-testid="name-filter"
          type="text"
          placeholder="Filtrar por nome"
          value={ filterByName }
          onChange={ ({ target }) => setFilterByName(target.value) }
        />
      </label>

      <select
        name="column"
        data-testid="column-filter"
        value={ filterByNumeric.column }
        onChange={ handleChange }
      >
        { population && <option value="population">population</option>}
        { orbitalPeriod && <option value="orbital_period">orbital_period</option>}
        { diameter && <option value="diameter">diameter</option>}
        { rotationPeriod && <option value="rotation_period">rotation_period</option>}
        { surfaceWater && <option value="surface_water">surface_water</option>}
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ filterByNumeric.comparison }
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="value-filter">
        <input
          name="value"
          id="value-filter"
          data-testid="value-filter"
          type="number"
          placeholder="Filtrar por valor"
          value={ filterByNumeric.value }
          onChange={ handleChange }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ setFilter }
        >
          Filtrar
        </button>
      </label>
    </form>
  );
}

export default Header;

// ajuda do Emerson Moreira e Rafael Carvalho
