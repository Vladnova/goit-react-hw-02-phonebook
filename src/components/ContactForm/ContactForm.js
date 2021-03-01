import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const allNameContacts = this.props.contactsApp.map(contact => contact.name);

    allNameContacts.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.props.onAddContacts(this.state);

    this.resetSubmit();
  };

  resetSubmit = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          <p> Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>

        <button type="submit" disabled={!name || !number}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
