import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const allNameContacts = this.state.contacts.map(({ name }) => name);

    allNameContacts.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };
  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getVisibleContact();

    return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onAddContacts={this.addContacts} />
        {contacts.length !== 0 && (
          <>
            <h2 className={styles.title}>Contacts</h2>
            <Filter
              onChangeFilter={this.handleFilterChange}
              valueFilter={filter}
            />
            <ContactList
              onFilterContacts={filterContacts}
              onDelete={this.handleDeleteContact}
            />
          </>
        )}
      </Container>
    );
  }
}

export default App;
