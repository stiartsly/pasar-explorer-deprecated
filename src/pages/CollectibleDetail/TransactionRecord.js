import React from 'react';
import * as styles from './transaction.module.scss';
// import PropTypes from 'prop-types';

export default function TransactionRecord() {
  return (
    <div className={styles.transactionitem}>
      <img src="/image/Collectible Details Creator.svg" />
      <div style={{ width: '100%' }}>
        <div className={styles.row}>
          <div className={styles.col_creator}>
            <div className={styles.title}>Creator</div>
            <div className={styles.value}>0x651s...shslf</div>
          </div>
          <div className={styles.col_royality}>
            <div className={styles.title}>Royalties</div>
            <div className={styles.value}>10%</div>
          </div>
          <div className={styles.col_gasfee}>
            <div className={styles.title}>Gas Fee</div>
            <div className={styles.value}>0.0031464 ELA</div>
          </div>
          <div className={styles.col_timestamp}>
            <div className={styles.title}>Timestamp</div>
            <div className={styles.value}>Nov-17-2021 01:25:25 AM +UTC</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TransactionRecord.propTypes = {
//   props: PropTypes.object,
//   imageUrl: PropTypes.string,
//   name: PropTypes.string,
//   timestamp: PropTypes.string,
//   description: PropTypes.string,
//   owner: PropTypes.string,
// };
