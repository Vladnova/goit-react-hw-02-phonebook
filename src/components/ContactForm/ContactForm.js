import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.props.onAddContacts(this.state);
    this.resetSubmit();
  };

  resetSubmit = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <p className={styles.label}>Name</p>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder=" "
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          <p className={styles.label}> Number</p>
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            placeholder=" "
            onChange={this.handleInputChange}
          />
        </label>

        <button
          className={styles.button}
          type="submit"
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContacts: PropTypes.func.isRequired,
};

export default ContactForm;
