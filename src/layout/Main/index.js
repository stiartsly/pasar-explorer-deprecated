import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style.module.scss';

export default function Main(props) {
  return <div className={styles.mainContainer}>{props.children}</div>;
}

Main.propTypes = {
  props: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
};
