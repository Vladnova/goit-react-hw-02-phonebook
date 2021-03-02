import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ onFilterContacts, onDelete }) => (
  <ul className={styles.containerList}>
    {onFilterContacts.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        <p>
          {name}: {number}
        </p>
        <button
          className={styles.button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.defaultProps = {
  onFilterContacts: [{}],
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onFilterContacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
