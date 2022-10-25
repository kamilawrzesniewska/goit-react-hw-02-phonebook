import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ filterArray, deleteItem }) => {
  return (
    <ul className={styles.contactList}>
      {filterArray().map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <span className={styles.contactLine}>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={styles.btn}
            onClick={() => deleteItem(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteIteme: PropTypes.func.isRequired,
  filterArray: PropTypes.func.isRequired,
};