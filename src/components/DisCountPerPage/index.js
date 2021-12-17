import React, { useState } from 'react';
import * as styles from './style.module.scss';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';

const BootstrapInput = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    width: '32px',
    color: '#ffffff',
    position: 'relative',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '15px',
    '&:focus': {
      backgroundColor: '#000000',
      border: 'none',
      borderRadius: '15px',
    },
  },
}));

export default function SelectBox({ onPageCountChange }) {
  const [nPageCount, setPageCount] = useState(10);
  const handleChange = event => {
    setPageCount(event.target.value);
    onPageCountChange(event.target.value);
  };

  return (
    <div className={styles.main}>
      <h4>Show</h4>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          id="demo-customized-select-native"
          value={nPageCount}
          onChange={handleChange}
          input={<BootstrapInput />}
          classes={{
            icon: styles.arrow_icon,
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: '#000000',
                marginTop: '-15px',
                borderRadius: '0 0 15px 15px',
                color: '#ffffff',
              },
            },
          }}
        >
          <MenuItem className={styles.menu_item} value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <h4>Records</h4>
    </div>
  );
}

SelectBox.propTypes = {
  onPageCountChange: PropTypes.func,
};
