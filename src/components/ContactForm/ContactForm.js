// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

// const onSubmit = e => {
//   e.preventDefault();
//   const { name, number } = e.target.elements;
//   const contact = {
//     id: nanoid(),
//     name: name.value,
//     number: number.value,
//   };
//   console.log(contact);
//   e.target.reset();
// };

export const ContactForm = ({ onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
