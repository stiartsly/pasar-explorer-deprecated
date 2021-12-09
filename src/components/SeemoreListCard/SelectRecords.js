import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function SelectRecords({ value, onChange }) {
  return (
    <div className={styles.selectContainer}>
      <span>Show</span>
      <div className={styles.selectBox}>
        <div className={styles.selectWrapper}>
          <span>{value}</span>
          <img src="/image/Select Down Arrow.svg" />
        </div>
        <div className={styles.selectList}>
          <div
            onClick={() => {
              onChange(25);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            25
          </div>
          <div
            onClick={() => {
              onChange(20);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            20
          </div>
          <div
            onClick={() => {
              onChange(10);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            10
          </div>
          <div
            onClick={() => {
              onChange(5);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            5
          </div>
        </div>
      </div>
      <span>Records</span>
    </div>
  );
}

SelectRecords.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};
