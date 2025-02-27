import React from 'react';
import './todoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setsSearchValue,
  } = React.useContext(TodoContext);
  
  return (
      <input placeholder="Cortar Cebolla" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => { setsSearchValue(event.target.value);

      }}
      />
  
    );
}

export { TodoSearch }