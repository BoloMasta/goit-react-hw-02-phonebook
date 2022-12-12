import css from './Filter.module.css';
// import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
