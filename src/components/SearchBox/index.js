import React from 'react';
import * as styles from './style.module.scss';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange, placeholder }) {
  return (
    <Paper
      className={styles.searchbox}
      component="form"
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Paper>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
SearchBox.defaultProps = {
  placeholder: "Search by name/contract/address/token ID"
};