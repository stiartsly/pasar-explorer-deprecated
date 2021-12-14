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
        <div className={styles.thumb}>
          <img src={props.thumbnail} />
        </div>
        <table>
          <thead>
            <th>Collectible</th>
            <th>Token ID</th>
            <th>Value</th>
            <th>Gas Fee</th>
            <th>Date</th>
          </thead>
          <tbody>
            <tr>
              <td>{props.name}</td>
              <td>{props.tokenIdHex}</td>
              <td>{props.value}</td>
              <td>{props.gasfee}&nbsp;ELA</td>
              <td>{props.timestamp}</td>
            </tr>
          </tbody>
        </table>
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
