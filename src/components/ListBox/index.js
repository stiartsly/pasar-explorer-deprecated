import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function ListBox(props) {
  return (
    <div className={styles.listbox}>
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.option}>See more</div>
      </div>
      {props.children}
    </div>
  );
}

ListBox.propTypes = {
  props: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  title: PropTypes.string,
};
