import React, { useContext } from 'react';
import Context from '../context/Context';

function Header() {
  const { filterByName, setFilterByName } = useContext(Context);

  return (
    <form>
      <label htmlFor="name-filter">
        <input
          id="name-filter"
          data-testid="name-filter"
          type="text"
          value={ filterByName }
          onChange={ ({ target }) => setFilterByName(target.value) }
        />
      </label>
    </form>
  );
}

export default Header;
