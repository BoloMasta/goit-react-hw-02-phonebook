import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target;
    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    if (this.state.contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    name.value = '';
    number.value = '';
  };

  onRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChange} />
        <ContactList
          contacts={this.state.contacts}
          onRemoveContact={this.onRemoveContact}
          filter={this.state.filter}
        />
      </>
    );
  }
}
