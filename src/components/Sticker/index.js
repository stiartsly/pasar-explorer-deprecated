import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function Sticker(props) {
  return (
    <Link
      to={{
        pathname: `/explorer/collectibles/${props.name}`,
        state: props,
      }}
    >
      <div className={styles.sticker_container}>
        <img src={props.thumbnail} width="50px" />
        <div style={{ width: '100%' }}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.title}>Collectible</div>
              <div className={styles.value}>{props.name}</div>
            </div>
            <div className={`${styles.col} ${styles.col_center}`}>
              <div className={styles.title}>Token ID</div>
              <div className={styles.value}>{props.tokenIdHex}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Value</div>
              <div className={styles.value}>{props.value}&nbsp;ELA</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Gas Fee</div>
              <div className={styles.value}>{props.gasfee}&nbsp;ELA</div>
            </div>
            <div className={`${styles.col} ${styles.col_center}`}>
              <div className={styles.title}>Timestamp</div>
              <div className={styles.value}>{props.timestamp.date}<br/>{props.timestamp.time}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Sticker.propTypes = {
  props: PropTypes.object,
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.object,
  tokenIdHex: PropTypes.string,
  gasfee: PropTypes.string,
  value: PropTypes.number,
};
