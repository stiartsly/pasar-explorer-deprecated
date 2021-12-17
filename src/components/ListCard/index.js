import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function ListCard(props) {
  return (
    <div className={styles.listbox}>
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.option}>
          <Link to={`/explorer/collectibles`}>See more</Link>
        </div>
      </div>
      {props.children}
    </div>
  );
}

ListCard.propTypes = {
  props: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  title: PropTypes.string,
};
