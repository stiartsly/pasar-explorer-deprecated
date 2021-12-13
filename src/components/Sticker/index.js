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
        <img src={props.thumbnail} width="70px" />
        <div style={{ width: '100%' }}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.title}>Collection</div>
              <div className={styles.value}>{props.name}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Token ID</div>
              <div className={styles.value}>{props.tokenIdHex}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Value</div>
              <div className={styles.value}>{props.value}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Gas Fee</div>
              <div className={styles.value}>{props.gasfee}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Date</div>
              <div className={styles.value}>{props.timestamp}</div>
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
  timestamp: PropTypes.string,
  tokenIdHex: PropTypes.string,
  gasfee: PropTypes.string,
  value: PropTypes.number,
};
