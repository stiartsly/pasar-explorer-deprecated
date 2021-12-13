import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Overview from '../../components/Overview';
import ListCard from '../../components/ListCard';
import CollectibleItem from '../../components/ListCard/CollectibleItem';
import TransactionItem from '../../components/ListCard/TransactionItem';
import Divide from '../../components/Divide';
import * as styles from './style.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

export default function Explorer() {
  // const creator = '0x44016ed8638f5B517a5beC7a722A56d1DEBefef7';
  const [accounts, setAccounts] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [txs, setTxs] = useState([]);
  const [newestCollectibles, setNewestCollectibles] = useState([]);
  const [latestTransactions, setLatestTransactions] = useState([]);
  // const [error, setError] = useState('');
  // Fetch Data //
  // Get Accounts //
  useEffect(async () => {
    const res = await fetch(
      'https://esc.elastos.io/api?module=account&action=listaccounts'
    );
    const data = await res.json();
    setAccounts(data.result);
  }, []);

  useEffect(async () => {
    // Get All Tokens & Transactions //
    let allToken = [];
    let allTx = [];
    for (let i = 0; i < accounts.length; i++) {
      try {
        const resToken = await fetch(
          `https://assist.trinity-feeds.app/sticker/api/v1/query?creator=${accounts[i].address}`
        );
        const dataToken = await resToken.json();
        allToken = allToken.concat(dataToken.data.result);
      } catch (err) {
        return;
      }
      try {
        const resTx = await fetch(
          `https://esc.elastos.io/api?module=account&action=txlist&address=${accounts[i].address}`
        );
        const dataTx = await resTx.json();
        allTx = allTx.concat(dataTx.result);
      } catch (err) {
        return;
      }
    }
    setTokens(allToken);
    setTxs(allTx);
  }, [accounts]);

  useEffect(() => {
    const newestFive = tokens
      .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
      .slice(0, 5);
    setNewestCollectibles(newestFive);
  }, [tokens]);

  useEffect(() => {
    const latestFive = txs
      .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
      .slice(0, 5);
    setLatestTransactions(latestFive);
  }, [txs]);
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="360px" />
      </div>
      <SearchBox placeholder="Search by name/contract/address/token ID" />
      <Overview />
      {/* {error && <div>{error}</div>} */}
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
                  gasfee={0}
                />
                {index < newestCollectibles.length - 1 && <Divide />}
              </div>
            );
          })}
        </ListCard>
        <ListCard title="Latest Transactions">
          {latestTransactions.map((tx, index) => {
            return (
              <>
                <TransactionItem
                  key={tx.hash}
                  imageUrl="image/Collectible Details Creator.svg"
                  txhash={reduceHexAddress(tx.hash)}
                  timestamp={getTime(tx.timeStamp)}
                  method="Transfer"
                  gasfee={0}
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
