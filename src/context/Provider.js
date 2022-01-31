/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import fetchPlanets from '../services/API';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    const getAPI = async () => {
      const result = await fetchPlanets();
      const { results } = result;
      setData(results);
    };
    getAPI();
  }, []);

  return (
    <Context.Provider value={ { filterByName, setFilterByName, data } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
