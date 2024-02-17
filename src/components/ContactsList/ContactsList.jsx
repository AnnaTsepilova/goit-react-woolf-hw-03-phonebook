import css from './ContactsList.module.css';
import cssButton from '../ContactForm/ContactForm.module.css';

export default function ContactsList({ contacts, onDelete }) {
  return (
    <ul className={css.contactsListContainer}>
      {contacts.map(contact => {
        return (
          <li className={css.contactsItem} key={contact.id}>
            <span className={css.text}>
              {contact.name}: {contact.number}
            </span>
            <button
              className={cssButton.deleteButton}
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
