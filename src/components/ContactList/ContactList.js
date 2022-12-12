import css from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
};
