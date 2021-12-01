import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function TransactionItem(props) {
  return (
    <div className={styles.transactionitem}>
      <img src={props.imageUrl} />
      <div style={{ width: '100%' }}>
        <div className={styles.row}>
          <div className={styles.col_name}>
            <div className={styles.title}>Name</div>
            <div className={styles.value}>{props.name}</div>
          </div>
          <div className={styles.col_description}>
            <div className={styles.title}>description</div>
            <div className={styles.value}>{props.description}</div>
          </div>
          <div className={styles.col_owner}>
            <div className={styles.title}>Owner</div>
            <div className={styles.value}>{props.owner}</div>
          </div>
          <div className={styles.col_date}>
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
  name: PropTypes.string,
  timestamp: PropTypes.string,
  description: PropTypes.string,
  owner: PropTypes.string,
};
