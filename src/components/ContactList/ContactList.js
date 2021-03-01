import React from 'react';

const ContactList = ({ onFilterContacts, onDelete }) => (
  <ul>
    {onFilterContacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
