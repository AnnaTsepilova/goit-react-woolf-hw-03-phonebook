import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './App.module.css';
import cssText from '../ContactsList/ContactsList.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '0674591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '0504438912' },
      { id: 'id-3', name: 'Eden Clements', number: '0736451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '0932279126' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');

    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(__, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const contact = { id: nanoid(), ...data };

    let isContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(data.name.toLowerCase())
    );

    if (isContact.length) {
      toast.warn(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    toast.success('Contact was added');
  };

  handleFilter = value => {
    this.setState(() => ({
      filter: value,
    }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    toast.success('Contact is deleted');
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <section className={css.sectionWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Section>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter filterByName={this.handleFilter} />
          {this.state.contacts.length ? (
            <ContactsList
              contacts={this.getContacts()}
              onDelete={this.deleteContact}
            />
          ) : (
            <span className={cssText.text}>
              There is no contact in your phonebook. Add your first!
            </span>
          )}
        </Section>
        <ToastContainer />
      </section>
    );
  }
}

export default App;
