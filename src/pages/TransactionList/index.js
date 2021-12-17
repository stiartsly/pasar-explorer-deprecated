import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import Transaction from '../../components/Transaction';
import Pagination from '../../components/Pagination';
import ShowSelect from '../../components/Pagination/ShowSelect';
// import DisCountPerPage from '../../components/DisCountPerPage';
import * as styles from './style.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

export default function TransactionList() {
  // const [keyword, setKeyword] = useState('');
  const [nDisplayCount, setDisplayCount] = useState(10);
  const [nCurPage, setCurPage] = useState(1);
  const [nPageCount, setPageCount] = useState(1);
  
  const [loadingData, setLoadingData] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [detailState, setDetailState] = useState(false);

  useEffect(async () => {
    setLoadingData(true);
    const res = await fetch(
      `https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=${nCurPage}&pageSize=${nDisplayCount}`
    );
    const json = await res.json();

    var nTempLimit = parseInt(json.data.total / nDisplayCount);
    setPageCount(json.data.total > nTempLimit * nDisplayCount ? nTempLimit + 1 : nTempLimit);
    setTransactions(json.data.result);
    setLoadingData(false);
  }, [nCurPage, nDisplayCount]);

  
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <img alt="logo" src="/image/Pasar.svg" width="150px" />
        </Link>
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>

      <div className={styles.page_content}>
        <div className={styles.content_header}>
          <div className={styles.header_title}>
            <h2>Latest Transactions</h2>
            <p>
              <h4>Show Details</h4>
              <span className={styles.detail_toggle}>
                <img
                  src="/image/Dark.svg"
                  className={detailState ? styles.detail_yes : styles.detail_no}
                  onClick={() => setDetailState(!detailState)}
                />
              </span>
            </p>
          </div>
          <Pagination page={nCurPage} pages={nPageCount} onChange={setCurPage} />
        </div>

        <div className={styles.content_main}>
          {loadingData && (
            <img
              src="../image/Dual Ring-1s.svg"
              className={styles.loading}
            />
          )}
          {transactions.map(item => {
            return (
              <>
                <Transaction
                  detailstate={detailState}
                  thumbnail={getThumbnail(item.thumbnail)}
                  name={item.name}
                  timestamp={getTime(item.createTime)}
                  tokenIdHex={reduceHexAddress(item.tokenIdHex)}
                  gasfee={(item.royalties / 10 ** 18).toFixed(13)}
                  value={item.value}
                  size={item.size}
                />
              </>
            );
          })}
        </div>

        <div className={styles.content_footer}>
          <h2>
            <ShowSelect count={nDisplayCount} onChange={setDisplayCount}></ShowSelect>
          </h2>
          {/* <DisCountPerPage onPageCountChange={setDisplayCount} /> */}
          <div>
            <Pagination page={nCurPage} pages={nPageCount} onChange={setCurPage} />
          </div> 
        </div>
      </div>
      
    </div>
  );
}
