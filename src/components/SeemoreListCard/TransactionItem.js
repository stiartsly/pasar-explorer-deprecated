import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function TransactionItem(props) {
  return (
    <div className={styles.transactionitem}>
      <img src={props.imageUrl} />
      <div style={{ width: '100%' }}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.title}>Tx Hash</div>
            <div className={styles.value}>{props.txhash}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.method}>
              <div className={styles.title}>Method</div>
              <div className={styles.value}>{props.method}</div>
            </div>
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
  );
}

TransactionItem.propTypes = {
  props: PropTypes.object,
  imageUrl: PropTypes.string,
  txhash: PropTypes.string,
  timestamp: PropTypes.string,
  method: PropTypes.string,
  gasfee: PropTypes.string,
};
