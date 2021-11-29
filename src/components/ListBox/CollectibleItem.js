import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function CollectibleItem(props) {
  return (
    <div className={styles.collectibleitem}>
      <img src={props.imageUrl} />
      <div>
        <div className={styles.row}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.timestamp}>{props.timestamp}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.tokenid}>Token ID : {props.tokenid}</div>
          <div className={styles.gasfee}>Gas Fee : {props.gasfee}</div>
        </div>
      </div>
    </div>
  );
}

CollectibleItem.propTypes = {
  props: PropTypes.object,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  tokenid: PropTypes.string,
  gasfee: PropTypes.string,
};
