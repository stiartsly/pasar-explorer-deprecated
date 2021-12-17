import React from 'react';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';
import { StandardButton } from '../Buttons';

export default function SeemoreListCard(props) {
  return (
    <div className={styles.listbox}>
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.pagenation}>
          <StandardButton
            title="First"
            onClick={() => props.onChangePage(0)}
            disabled={props.pageNo < 1}
          />
          <StandardButton
            title="<"
            onClick={() => props.onChangePage(props.pageNo - 1)}
            disabled={props.pageNo < 1}
          />
          <div className={styles.pageNum}>
            Page {props.pageNo + 1} of {props.pages}
          </div>
          <StandardButton
            title=">"
            onClick={() => props.onChangePage(props.pageNo + 1)}
            disabled={props.pageNo > props.pages - 2}
          />
          <StandardButton
            title="Last"
            onClick={() => props.onChangePage(props.pages - 1)}
            disabled={props.pageNo > props.pages - 2}
          />
        </div>
      </div>
      {props.children}
    </div>
  );
}

SeemoreListCard.propTypes = {
  props: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  title: PropTypes.string,
  pages: PropTypes.number,
  pageNo: PropTypes.number,
  onChangePage: PropTypes.func,
};
