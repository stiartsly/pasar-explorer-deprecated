import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as styles from './style.module.scss';
import TransactionGraph from '../../components/TransactionGraph';
import TransactionRecord from './TransactionRecord';
import SearchBox from '../../components/SearchBox';
import TransactionItem from '../../components/SeemoreListCard/TransactionItem';
import { latestTransactions } from '../../mockdata';

export default function CollectionDetail() {
  const params = useParams();
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div className={styles.collectionName}>{params.collection}</div>
      <div className={styles.collectionInfo}>
        <div className={styles.chartContainer}>
          <TransactionGraph />
        </div>
        <h1>Collectible Records</h1>
        <SearchBox placeholder="Search Records" />
        <TransactionRecord />
        {latestTransactions.map(item => {
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
      </div>
    </>
  );
}
