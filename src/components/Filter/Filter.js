import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

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
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
