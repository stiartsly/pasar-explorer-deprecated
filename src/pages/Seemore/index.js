import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import SeemoreListCard from '../../components/SeemoreListCard';
import CollectibleItem from '../../components/SeemoreListCard/CollectibleItem';
import TransactionItem from '../../components/SeemoreListCard/TransactionItem';
import * as styles from './style.module.scss';

import { newestCollectibles, latestTransactions } from '../../mockdata';
import SelectRecords from '../../components/SeemoreListCard/SelectRecords';

export default function Seemore() {
  const params = useParams();
  const [recordsPerPage, setRecordPerPage] = useState(25);
  const [collectibles, setCollectibles] = useState(newestCollectibles);
  const [transactions, setTransactions] = useState(latestTransactions);
  const [pagesCollectible, setPagesCollectible] = useState();
  const [pagesTransaction, setPagesTransaction] = useState();
  useEffect(() => {
    const recordsCollectible = newestCollectibles.slice(0, recordsPerPage);
    setCollectibles(recordsCollectible);
    const recordsTransaction = latestTransactions.slice(0, recordsPerPage);
    setTransactions(recordsTransaction);
    setPagesCollectible(Math.ceil(newestCollectibles.length / recordsPerPage));
    setPagesTransaction(Math.ceil(latestTransactions.length / recordsPerPage));
  }, [recordsPerPage]);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="image/Pasar.svg" width="100px" />
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.dashboard}>
        {params.type == 'Newest Collectibles' && (
          <SeemoreListCard title="Newest Collectibles" pages={pagesCollectible}>
            {collectibles.map((item, index) => {
              return (
                <>
                  <CollectibleItem
                    key={`collectible${index}`}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    timestamp={item.timestamp}
                    tokenid={item.tokenid}
                    gasfee={item.gasfee}
                  />
                </>
              );
            })}
            <SelectRecords value={recordsPerPage} onChange={setRecordPerPage} />
          </SeemoreListCard>
        )}
        {params.type == 'Latest Transactions' && (
          <SeemoreListCard title="Latest Transactions" pages={pagesTransaction}>
            {transactions.map((item, index) => {
              return (
                <>
                  <TransactionItem
                    key={`transaction${index}`}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    timestamp={item.timestamp}
                    owner={item.owner}
                    description={item.description}
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
