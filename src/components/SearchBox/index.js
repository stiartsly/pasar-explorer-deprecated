import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange, placeholder }) {
  return (
    <div className={styles.searchbox}>
      <img src="image/Search.svg" />
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
