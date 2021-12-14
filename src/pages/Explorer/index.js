import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import Overview from '../../components/Overview';
import Divide from '../../components/Divide';
import * as styles from '../../styles/explorer.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

export default function Explorer() {
  const [newestCollectibles, setNewestCollectibles] = React.useState([]);
  const [loadingCollectibles, setLoadingCollectibles] = React.useState(false);
  React.useEffect(async () => {
    setLoadingCollectibles(true);
    const res = await fetch(
      'https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=1&pagSize=10'
    );
    const json = await res.json();
    setNewestCollectibles(json.data.result);
    setLoadingCollectibles(false);
  }, []);

  return (
    <div className="page_container">
      <div className="page_header">
        <div className={styles.logo}>
          <img alt="logo" src="/image/Pasar.svg" width="360px" />
        </div>
        <div className={styles.search}>
          <SearchBox placeholder="Search by name/contract/address/token ID" />
        </div>
        <Overview />
      </div>
      <div className="page_content">
        <div className={styles.sticker_container}>
          {/* Newest Collectibles */}
          <div className={styles.sticker_list}>
            <div className={styles.header}>
              <h1>Newest Collectibles</h1>
              <Link to="/explorer/collectibles">
                <span>See more</span>
                <img src="image/Arrow Right.svg" width="20px" />
              </Link>
            </div>
            <div className={styles.content}>
              {loadingCollectibles && (
                <img
                  src="image/Dual Ring-1s-200px.svg"
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
                        <tr>
                          <td>{collectible.name}</td>
                          <td>{getTime(collectible.createTime)}</td>
                        </tr>
                        <tr>
                          <td>{reduceHexAddress(collectible.tokenIdHex)}</td>
                        </tr>
                      </table>
                    </div>
                    {index < newestCollectibles.length - 1 && <Divide />}
                  </>
                );
              })}
            </div>
          </div>
          {/* Latest Transactions */}
          <div className={styles.sticker_list}>
            <div className={styles.header}>
              <h1>Latest Transactions</h1>
              <Link to="/explorer/transactions">
                <span>See more</span>
                <img src="image/Arrow Right.svg" width="20px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
