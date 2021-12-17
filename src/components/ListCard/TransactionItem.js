import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function TransactionItem(props) {
  return (
    <div className={styles.transactionitem}>
      <img src={props.imageUrl} />
      <div style={{ width: '100%' }}>
        <div className={styles.row}>
          <div className={styles.txhash}>Tx Hash : {props.txhash}</div>
          <div className={styles.timestamp}>{props.timestamp}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.method}>
            <span>Method : </span>
            <span className={styles.badge}>{props.method}</span>
          </div>
          <div className={styles.gasfee}>Gas Fee : {props.gasfee} ELA</div>
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
