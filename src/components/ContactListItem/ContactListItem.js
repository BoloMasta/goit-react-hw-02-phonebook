import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, onRemoveContact }) => (
  <li className={css.item}>
    <p className={css.text}>
      {contact.name}: {contact.number}
    </p>
    <button
      className={css.button}
      type="button"
      onClick={() => onRemoveContact(contact.id)}
    >
      Delete
    </button>
  </li>
);
