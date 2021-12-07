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
  const [pagesNoCollectible, setPagesNoCollectible] = useState(0);
  const [pagesNoTransaction, setPagesNoTransaction] = useState(0);
  const [pagesCollectible, setPagesCollectible] = useState();
  const [pagesTransaction, setPagesTransaction] = useState();
  useEffect(() => {
    const recordsCollectible = newestCollectibles.slice(
      pagesNoCollectible * recordsPerPage,
      pagesNoCollectible * recordsPerPage + recordsPerPage
    );
    setCollectibles(recordsCollectible);
    const recordsTransaction = latestTransactions.slice(
      pagesNoTransaction * recordsPerPage,
      pagesNoTransaction * recordsPerPage + recordsPerPage
    );
    setTransactions(recordsTransaction);
    setPagesCollectible(Math.ceil(newestCollectibles.length / recordsPerPage));
    setPagesTransaction(Math.ceil(latestTransactions.length / recordsPerPage));
  }, [recordsPerPage, pagesNoCollectible]);

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
                    key={item.collection}
                    imageUrl={item.imageUrl}
                    collection={item.collection}
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
          <SeemoreListCard
            title="Latest Transactions"
            pages={pagesTransaction}
            pageNo={pagesNoTransaction}
            onChangePage={setPagesNoTransaction}
          >
            {transactions.map(item => {
              return (
                <>
                  <TransactionItem
                    key={item.name}
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
