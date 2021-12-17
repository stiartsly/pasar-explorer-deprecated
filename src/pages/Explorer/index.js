import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import Overview from '../../components/Overview';
import Divide from '../../components/Divide';
import * as styles from '../../styles/explorer.module.scss';
import {
  reduceHexAddress,
  getThumbnail,
  getElapsedTime,
  getMethod,
} from '../../utils/common';

export default function Explorer() {
  const [newestCollectibles, setNewestCollectibles] = React.useState([]);
  const [loadingCollectibles, setLoadingCollectibles] = React.useState(false);
  const [latestTransactions, setLatestTransactions] = React.useState([]);
  const [loadingTransactions, setLoadingTransactions] = React.useState(false);

  React.useEffect(async () => {
    setLoadingCollectibles(true);
    const res = await fetch(
      'https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=1&pagSize=10'
    );
    const json = await res.json();
    setNewestCollectibles(json.data.result);
    setLoadingCollectibles(false);
  }, []);

  React.useEffect(async () => {
    setLoadingTransactions(true);
    const res = await fetch(
      'https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=2&pagSize=10'
    );
    // console.log(res);
    const json = await res.json();
    setLatestTransactions(json.data.result);
    setLoadingTransactions(false);
  }, []);

  return (
    <div className="page_container">
      <div className="page_header">
        <div className={styles.logo}>
          <img alt="logo" src="/image/Pasar.svg" width="360px" />
        </div>
        <div className={styles.search}>
          <SearchBox />
        </div>
        <Overview />
      </div>
      <div className="page_content">
        <div className={styles.sticker_container}>
          {/* Newest Collectibles */}
          <div className={styles.sticker_list} style={{marginRight:"20px"}}>
            <div className={styles.header}>
              <h1>Newest Collectibles</h1>
              <Link to="/explorer/collectibles">
                <span>See more</span>
                <img src="image/Arrow Right.svg" width="10px" />
              </Link>
            </div>
            <div className={styles.content}>
              {loadingCollectibles && (
                <img
                  src="image/Dual Ring-1s.svg"
                  className={styles.loading}
                />
              )}
              {newestCollectibles.map((collectible, index) => {
                return (
                  <>
                    <div className={styles.item} key={index}>
                      <div className={styles.thumb}>
                        <img src={getThumbnail(collectible.thumbnail)} />
                      </div>
                      <table>
                        <colgroup>
                          <col />
                          <col width="250px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td className={styles.collectible_name}>{collectible.name}</td>
                            <td>{getElapsedTime(collectible.createTime)}</td>
                          </tr>
                          <tr>
                            <td>Token ID : {reduceHexAddress(collectible.tokenIdHex)}</td>
                            <td>Gas Fee : {(collectible.royalties / 10 ** 8).toFixed(7)} ELA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {index < newestCollectibles.length - 1 && <Divide />}
                  </>
                );
              })}
            </div>
          </div>
          {/* Latest Transactions */}
          <div className={styles.sticker_list} style={{marginLeft:"20px"}}>
            <div className={styles.header}>
              <h1>Latest Transactions</h1>
              <Link to="/explorer/transactions">
                <span>See more</span>
                <img src="image/Arrow Right.svg" width="10px" />
              </Link>
            </div>
            <div className={styles.content}>
              {loadingTransactions && (
                <img
                  src="image/Dual Ring-1s-200px.svg"
                  className={styles.loading}
                />
              )}
              {latestTransactions.map((transaction, index) => {
                return (
                  <>
                    <div className={styles.item} key={index}>
                      <div className={styles.thumb}>
                        <img src={getThumbnail(transaction.thumbnail)} />
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td>Tx Hash : {reduceHexAddress(transaction.holder)}</td>
                            <td>{getElapsedTime(transaction.createTime)}</td>
                          </tr>
                          <tr>
                            <td>
                              Method : <span className={styles.method}>{getMethod(transaction.tokenIdHex)}</span>
                            </td>
                            <td>Gas Fee : {(transaction.tokenIndex / 1000000000).toString().substring(0, 8)} ELA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {index < latestTransactions.length - 1 && <Divide />}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
