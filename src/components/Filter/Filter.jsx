import React from 'react';
import PropTypes from 'prop-types';
// import css from './';

const Filter = ({ changeFilter, filter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        required
        onChange={changeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
