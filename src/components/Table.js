import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

function Table() {
  const { data: database, filterByName, newData } = useContext(Context);
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    const getFilter = () => {
      if (newData.length > 0) {
        return newData;
      }
      return database.filter((el) => el.name.includes(filterByName));
    };
    setDataFilter(getFilter());
  }, [database, newData, filterByName]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { dataFilter.map((data) => (
          <tr key={ data.name }>
            <td>{ data.name }</td>
            <td>{ data.rotation_period }</td>
            <td>{ data.orbital_period }</td>
            <td>{ data.diameter }</td>
            <td>{ data.climate }</td>
            <td>{ data.gravity }</td>
            <td>{ data.terrain }</td>
            <td>{ data.surface_water }</td>
            <td>{ data.population }</td>
            <td>{ data.films }</td>
            <td>{ data.created }</td>
            <td>{ data.edited }</td>
            <td>{ data.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
