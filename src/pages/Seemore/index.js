import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import SeemoreListCard from '../../components/SeemoreListCard';
import CollectibleItem from '../../components/SeemoreListCard/CollectibleItem';
import TransactionItem from '../../components/SeemoreListCard/TransactionItem';
import * as styles from './style.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

import SelectRecords from '../../components/SeemoreListCard/SelectRecords';

export default function Seemore() {
  const creator = '0x44016ed8638f5B517a5beC7a722A56d1DEBefef7';
  const params = useParams();
  const [error, setError] = useState('');
  const [recordsPerPage, setRecordPerPage] = useState(25);
  const [allCollectibles, setAllCollectibles] = useState([]);
  const [collectibles, setCollectibles] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [pagesNoCollectible, setPagesNoCollectible] = useState(0);
  const [pagesNoTransaction, setPagesNoTransaction] = useState(0);
  const [pagesCollectible, setPagesCollectible] = useState();
  const [pagesTransaction, setPagesTransaction] = useState();
  useEffect(() => {
    const recordsCollectible = allCollectibles.slice(
      pagesNoCollectible * recordsPerPage,
      pagesNoCollectible * recordsPerPage + recordsPerPage
    );
    setCollectibles(recordsCollectible);
    const recordsTransaction = allTransactions.slice(
      pagesNoTransaction * recordsPerPage,
      pagesNoTransaction * recordsPerPage + recordsPerPage
    );
    setTransactions(recordsTransaction);
    setPagesCollectible(Math.ceil(allCollectibles.length / recordsPerPage));
    setPagesTransaction(Math.ceil(allTransactions.length / recordsPerPage));
  }, [recordsPerPage, pagesNoCollectible, allCollectibles]);

  useEffect(() => {
    // Get All(200) Tokens //
    fetch(
      `https://assist.trinity-feeds.app/sticker/api/v1/query?creator=${creator}`
    )
      .then(res => res.json())
      .then(
        result => {
          const all = result.data.result.sort((a, b) =>
            a.timestamp > b.timestamp ? 1 : -1
          );
          setAllCollectibles(all);
        },
        error => {
          setError(error);
        }
      );
    // Get Transactions //
    fetch(
      `https://esc.elastos.io/api?module=account&action=txlist&address=${creator}`
    )
      .then(res => res.json())
      .then(
        data => {
          const all = data.result.sort((a, b) =>
            a.timestamp > b.timestamp ? 1 : -1
          );
          setAllTransactions(all);
        },
        error => {
          setError(error);
        }
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="100px" />
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.dashboard}>
        {error && <div>{error}</div>}
        {params.type == 'Newest Collectibles' && (
          <SeemoreListCard
            title="Newest Collectibles"
            pages={pagesCollectible}
            pageNo={pagesNoCollectible}
            onChangePage={setPagesNoCollectible}
          >
            {collectibles.map(item => {
              return (
                <>
                  <CollectibleItem
                    thumbnail={getThumbnail(item.thumbnail)}
                    name={item.name}
                    timestamp={getTime(item.timestamp)}
                    tokenIdHex={reduceHexAddress(item.tokenIdHex)}
                    gasfee={(item.royalties / 10 ** 18).toFixed(13)}
                    value={item.value}
                  />
                </>
              );
            })}
            <SelectRecords value={recordsPerPage} onChange={setRecordPerPage} />
          </SeemoreListCard>
        )}
        {params.type == 'Latest Transactions' && (
          <SeemoreListCard
            title="Latest Transactions"
            pages={pagesTransaction}
            pageNo={pagesNoTransaction}
            onChangePage={setPagesNoTransaction}
          >
            {transactions.map(tx => {
              return (
                <>
                  <TransactionItem
                    key={tx.hash}
                    imageUrl="image/Collectible Details Creator.svg"
                    txhash={reduceHexAddress(tx.hash)}
                    timestamp={getTime(tx.timestamp)}
                    method="Transfer"
                    gasfee={tx.gasPrice / 10 ** 9}
                  />
                </>
              );
            })}
            <SelectRecords value={recordsPerPage} onChange={setRecordPerPage} />
          </SeemoreListCard>
        )}
      </div>
    </div>
  );
}
