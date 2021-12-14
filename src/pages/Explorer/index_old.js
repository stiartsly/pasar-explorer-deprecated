import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Overview from '../../components/Overview';
// import ListCard from '../../components/ListCard';
import CollectibleItem from '../../components/ListCard/CollectibleItem';
// import TransactionItem from '../../components/ListCard/TransactionItem';
import Divide from '../../components/Divide';
import * as styles from './style.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

export default function Explorer() {
  const [newestCollectibles, setNewestCollectibles] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      'https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=1&pagSize=10'
    );
    const json = await res.json();
    console.log(json.data.result);
    setNewestCollectibles(json.data.result);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="360px" />
      </div>
      <SearchBox placeholder="Search by name/contract/address/token ID" />
      <Overview />
      <div className={styles.two_columns_container}>
        <div className={styles.column_container}>
          <div className={styles.column_header}>
            <h4>Newest Collectibles</h4>
            <Link to="/explorer/collectibles">
              See more
              <img src="image/Right Arrow.svg" />
            </Link>
          </div>
          <div>
            {newestCollectibles.map((item, index) => {
              return (
                <div key={item.tokenIndex}>
                  <CollectibleItem
                    thumbnail={getThumbnail(item.thumbnail)}
                    name={item.name}
                    timestamp={getTime(item.createTime)}
                    tokenIdHex={reduceHexAddress(item.tokenIdHex)}
                    gasfee={0}
                  />
                  {index < newestCollectibles.length - 1 && <Divide />}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.column_container}>
          <div className={styles.column_header}>
            <h4>Latest Collectibles</h4>
            <Link to="/explorer/transactions">
              See more
              <img src="image/Right Arrow.svg" />
            </Link>
          </div>
          No Transaction
        </div>
      </div>
    </div>
  );
}
