import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function SeemoreListCard(props) {
  return (
    <div className={styles.listbox}>
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.pagenation}>
          <div className={styles.pageNum}>Page 1 of {props.pages}</div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

SeemoreListCard.propTypes = {
  props: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  title: PropTypes.string,
  pages: PropTypes.number,
};
