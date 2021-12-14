import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function Pagination({ pages, page, onChange }) {
  return (
    <div className={styles.pagenation}>
      <button onClick={() => onChange(1)} disabled={page == 1}>
        First
      </button>
      <button onClick={() => onChange(page - 1)} disabled={page == 1}>
        Prev
      </button>
      <div className={styles.page}>
        Page {page} of {pages}
      </div>
      <button onClick={() => onChange(page + 1)} disabled={page == pages}>
        Next
      </button>
      <button onClick={() => onChange(pages)} disabled={page == pages}>
        Last
      </button>
    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
