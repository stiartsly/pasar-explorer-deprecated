import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange }) {
  return (
    <div className={styles.searchbox}>
      <img src="image/Search.svg" />
      <input
        placeholder="Search by name/contract/address/token ID"
        onChange={onChange}
      />
    </div>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
};
