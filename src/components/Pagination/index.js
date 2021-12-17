import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

export default function Pagination({ pages, page, onChange }) {
  return (
    <div className={styles.pagenation}>
      <Button
        variant="contained"
        style={{textTransform: 'none'}}
        onClick={() => {
          onChange(1);
        }}
        disabled={page == 1}
      >
        First
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          onChange(page - 1);
        }}
        disabled={page == 1}
      >
        <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
      </Button>
      <Button
        id={styles.page}
        variant="contained"
        style={{textTransform: 'none'}}
        disabled
      >
        Page {page} of {pages}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          onChange(page + 1);
        }}
        disabled={page == pages}
      >
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Button>
      <Button
        variant="contained"
        style={{textTransform: 'none'}}
        onClick={() => {
          onChange(pages);
        }}
        disabled={page == pages}
      >
        Last
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
