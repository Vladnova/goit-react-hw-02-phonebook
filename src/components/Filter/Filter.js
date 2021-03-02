import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ valueFilter, onChangeFilter }) => (
  <div className={styles.containerFilter}>
    <label>
      <p className={styles.titleFilter}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={valueFilter}
        placeholder=" "
        onChange={onChangeFilter}
      />
    </label>
  </div>
);

Filter.defaultProps = {
  valueFilter: '',
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  valueFilter: PropTypes.string,
};
export default Filter;
