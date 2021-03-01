import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChangeName = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };
  render() {
    const nameId = uuidv4();
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label htmlFor={nameId}> Name</label>
          <input
            type="text"
            id={nameId}
            value={this.state.name}
            onChange={this.handleInputChangeName}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default App;
