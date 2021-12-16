import React from 'react';
import * as styles from '../style.module.scss';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

export default function ShowSelect({ show_count, onChange }) {
  return (
    <div className={styles.ShowSelect}>
      <label>Show</label>
      <Select
        className={styles.select_box}
        defaultValue={10}
        value={show_count}
        onChange={onChange}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      <label>Records</label>
    </div>
  );
}

ShowSelect.propTypes = {
  show_count: PropTypes.number,
  onChange: PropTypes.func,
};
