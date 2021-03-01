import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
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
        <h1>Phonebook</h1>
        <ContactForm onAddContacts={this.addContacts} contactsApp={contacts} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.handleFilterChange} valueFilter={filter} />
        <ContactList
          onFilterContacts={filterContacts}
          onDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
