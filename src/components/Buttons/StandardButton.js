import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style.module.scss';

export function StandardButton({ title, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className={styles.standardButton}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

StandardButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
