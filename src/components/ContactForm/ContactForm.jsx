import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  id: '',
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = { handleSubmit: PropTypes.func.isRequired };

  state = { ...INITIAL_STATE };

  elementId = nanoid();

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.id}>Name</label>
        <input
          className={style.input}
          id={this.id}
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.id}>Phone</label>
        <input
          className={style.input}
          id={this.id}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
