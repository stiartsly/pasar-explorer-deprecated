import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import * as styles from './style.module.scss';

export function StandardButton({ title, onClick, disabled }) {
  return (
    <div className={styles.standardButton}>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
}

StandardButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
