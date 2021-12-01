import React from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import SeemoreListCard from '../../components/SeemoreListCard';
import CollectibleItem from '../../components/SeemoreListCard/CollectibleItem';
import TransactionItem from '../../components/SeemoreListCard/TransactionItem';
import * as styles from './style.module.scss';

import { newestCollectibles, latestTransactions } from '../../mockdata';

export default function Seemore() {
  const params = useParams();
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
          <SeemoreListCard title="Newest Collectibles">
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
                </>
              );
            })}
          </SeemoreListCard>
        )}
        {params.type == 'Latest Transactions' && (
          <SeemoreListCard title="Latest Transactions">
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
                </>
              );
            })}
          </SeemoreListCard>
        )}
      </div>
    </div>
  );
}
