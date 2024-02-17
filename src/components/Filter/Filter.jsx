import css from './Filter.module.css';
import cssInput from '../ContactForm/ContactForm.module.css';
import cssText from '../ContactForm/ContactForm.module.css';

export default function Filter({ searchQuery, filterByName }) {
  return (
    <div className={css.filterContainer}>
      <p className={cssText.text}>Find contacts by name</p>
      <input
        className={cssInput.contactInput}
        type="text"
        value={searchQuery}
        onChange={event => filterByName(event.target.value)}
      />
    </div>
  );
}
