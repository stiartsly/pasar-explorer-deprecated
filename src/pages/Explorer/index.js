import React from 'react';
import SearchBox from '../../components/SearchBox';
import Overview from '../../components/Overview';
import ListCard from '../../components/ListCard';
import CollectibleItem from '../../components/ListCard/CollectibleItem';
import TransactionItem from '../../components/ListCard/TransactionItem';
import Divide from '../../components/Divide';
import * as styles from './style.module.scss';

import { newestCollectibles, latestTransactions } from '../../mockdata';

export default function Explorer() {
  return (
    <div className={styles.container}>
      <SearchBox />
      <Overview />
      <div className={styles.dashboard}>
        <ListCard title="Newest Collectibles">
          {newestCollectibles.map((item, index) => {
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
                {index < newestCollectibles.length - 1 && <Divide />}
              </>
            );
          })}
        </ListCard>
        <ListCard title="Latest Transactions">
          {latestTransactions.map((item, index) => {
            return (
              <>
                <TransactionItem
                  key={`transaction${index}`}
                  imageUrl={item.imageUrl}
                  txhash={item.txhash}
                  timestamp={item.timestamp}
                  method={item.method}
                  gasfee={item.gasfee}
                />
                {index < latestTransactions.length - 1 && <Divide />}
              </>
            );
          })}
        </ListCard>
      </div>
    </div>
  );
}
