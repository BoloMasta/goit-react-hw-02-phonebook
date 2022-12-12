import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>

        <Filter />

        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
