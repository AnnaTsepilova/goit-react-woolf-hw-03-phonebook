import { Component } from 'react';
import css from './ContactForm.module.css';

import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.formContainer} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className={css.contactInput}
          type="text"
          name="name"
          pattern="^([A-Za-zZА-Яа-яіїІЇ \.]{2,})+$"
          placeholder="Anna"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label className={css.label} htmlFor={this.telInputId}>
          Number
        </label>
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          pattern="^\+?3?8?(0\d{9})$"
          placeholder="+380671234567"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={this.telInputId}
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
