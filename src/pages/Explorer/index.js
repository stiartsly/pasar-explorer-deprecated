import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Overview from '../../components/Overview';
import ListCard from '../../components/ListCard';
import CollectibleItem from '../../components/ListCard/CollectibleItem';
import TransactionItem from '../../components/ListCard/TransactionItem';
import Divide from '../../components/Divide';
import * as styles from './style.module.scss';

import { latestTransactions } from '../../mockdata';

export default function Explorer() {
  const creator = '0x44016ed8638f5B517a5beC7a722A56d1DEBefef7';
  const [tokens, setTokens] = useState([]);
  const [newestCollectibles, setNewestCollectibles] = useState([]);
  const [error, setError] = useState('');
  // Get All(200) Tokens - Start //
  useEffect(() => {
    fetch(
      `https://assist.trinity-feeds.app/sticker/api/v1/query?creator=${creator}`
    )
      .then(res => res.json())
      .then(
        result => {
          const temp = result.data.result
            .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
            .slice(0, 5);
          setNewestCollectibles(temp);
          setTokens(result.data.result);
          console.log(tokens);
        },
        error => {
          setError(error);
        }
      );
  }, []);
  // Get Abbrevation of hex addres //
  const reduceHexAddress = strAddress => {
    return `${strAddress.substring(0, 5)}...${strAddress.substring(
      strAddress.length - 3,
      strAddress.length
    )}`;
  };
  // Get time from timestamp //
  const getTime = timestamp => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(timestamp);
  };
  // Get thumbnail url //
  const getThumbnail = id => {
    return `https://ipfs0.trinity-feeds.app/ipfs/${id.substring(
      12,
      id.length
    )}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="360px" />
      </div>
      <SearchBox placeholder="Search by name/contract/address/token ID" />
      <Overview />
      {error && <div>{error}</div>}
      <div className={styles.dashboard}>
        <ListCard title="Newest Collectibles">
          {newestCollectibles?.map((item, index) => {
            return (
              <div key={item.collection}>
                <CollectibleItem
                  thumbnail={getThumbnail(item.thumbnail)}
                  name={item.name}
                  timestamp={getTime(item.timestamp)}
                  tokenIdHex={reduceHexAddress(item.tokenIdHex)}
                  gasfee={(item.royalties / 10 ** 18).toFixed(13)}
                />
                {index < newestCollectibles.length - 1 && <Divide />}
              </div>
            );
          })}
        </ListCard>
        <ListCard title="Latest Transactions">
          {latestTransactions.map((item, index) => {
            return (
              <>
                <TransactionItem
                  key={item.txhash}
                  imageUrl={item.imageUrl}
                  txhash={item.txhash}
                  timestamp={item.timestamp}
                  method={item.method}
                  gasfee={item.gasfee}
                />
                {index < latestTransactions.length - 1 && (
                  <Divide key={index} />
                )}
              </>
            );
          })}
        </ListCard>
      </div>
    </div>
  );
}
