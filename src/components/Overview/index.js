import React from 'react';
import * as styles from './style.module.scss';
// import PropTypes from 'prop-types';

export default function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.column}>
        <div className={styles.value}>25,000 + ELA</div>
        <div className={styles.text}>💰 Trading Volume</div>
      </div>
      <div className={styles.divide} />
      <div className={styles.column}>
        <div className={styles.value}>1,000 + </div>
        <div className={styles.text}>🖼 ️Collectible Assets</div>
      </div>
      <div className={styles.divide} />
      <div className={styles.column}>
        <div className={styles.value}>2,000 + </div>
        <div className={styles.text}>✉️ Transactions</div>
      </div>
      <div className={styles.divide} />
      <div className={styles.column}>
        <div className={styles.value}>50 + </div>
        <div className={styles.text}>👛 Wallet Address</div>
      </div>
    </div>
  );
}

// Overview.propTypes = {
//   tradingVolume: PropTypes.number,
// };
