import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function CollectibleItem(props) {
  return (
    <Link
      to={{
        pathname: `/seemore/Newest%20Collectibles/${props.collection}`,
        state: props,
      }}
    >
      <div className={styles.collectibleitem}>
        <img src={props.imageUrl} />
        <div style={{ width: '100%' }}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.title}>Collection</div>
              <div className={styles.value}>{props.collection}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.title}>Token ID</div>
              <div className={styles.value}>{props.tokenid}</div>
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

CollectibleItem.propTypes = {
  props: PropTypes.object,
  imageUrl: PropTypes.string,
  collection: PropTypes.string,
  timestamp: PropTypes.string,
  tokenid: PropTypes.string,
  gasfee: PropTypes.string,
  value: PropTypes.number,
};