import React from 'react';

const Filter = ({ valueFilter, onChangeFilter }) => (
  <label>
    <p>Find contacts by name</p>
    <input type="text" value={valueFilter} onChange={onChangeFilter} />
  </label>
);

export default Filter;
