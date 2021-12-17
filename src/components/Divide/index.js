import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function Divide() {
  return <div className={styles.divide} />;
}

Divide.propTypes = {
  type: PropTypes.string,
};
