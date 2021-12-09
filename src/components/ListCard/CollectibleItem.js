import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function CollectibleItem(props) {
  return (
    <div className={styles.collectibleitem}>
      <img src={props.thumbnail} width="50px" />
      <div style={{ width: '100%' }}>
        <div className={styles.row}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.timestamp}>{props.timestamp}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.tokenIdHex}>Token ID : {props.tokenIdHex}</div>
          <div className={styles.gasfee}>Gas Fee : {props.gasfee}&nbsp;ELA</div>
        </div>
      </div>
    </div>
  );
}

CollectibleItem.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  timestamp: PropTypes.string,
  tokenIdHex: PropTypes.string,
  thumbnail: PropTypes.string,
  gasfee: PropTypes.string,
};
