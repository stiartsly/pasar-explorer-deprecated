import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as styles from './style.module.scss';
import TransactionGraph from '../../components/TransactionGraph';
import TransactionRecord from './TransactionRecord';
import { getThumbnail } from '../../utils/common';

export default function CollectibleDetail() {
  const params = useParams();
  let location = useLocation();
  const [thumbLoaded, setThumbLoaded] = useState(false);
  return (
    <>
      <div className={styles.collectionName}>{params.collection}</div>
      <div className={styles.collectionInfo}>
        <div className={styles.chartContainer}>
          <TransactionGraph />
        </div>
        <h1>Collectible Assets</h1>
        <div className={styles.assetContainer}>
          {!thumbLoaded && (
            <img src="/image/Dual Ring-1s.svg" className={styles.loading} />
          )}
          <img
            style={thumbLoaded ? {} : { display: 'none' }}
            src={getThumbnail(location.state.thumbnail)}
            onLoad={() =>
              setTimeout(function () {
                setThumbLoaded(true);
              }, 500)
            }
          />
          <div className={styles.collectibleDetails}>
            <h1>Collectible Details</h1>
            <div className={styles.detailItem}>
              <img src="/image/Collectible Details Name.svg" />
              <div className={styles.dataWrapper}>
                <h3>Name</h3>
                <div>{location.state.name}</div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.detailItem}>
              <img src="/image/Collectible Details Description.svg" />
              <div className={styles.dataWrapper}>
                <h3>Description</h3>
                <div>{location.state.description}</div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.detailItem}>
              <img src="/image/Collectible Details Creator.svg" />
              <div className={styles.dataWrapper}>
                <h3>Creator</h3>
                <div>0x651s...shslf</div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.detailItem}>
              <img src="/image/Collectible Details Owner.svg" />
              <div className={styles.dataWrapper}>
                <h3>Owner</h3>
                <div>0x243s...GTghdS</div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.detailItem}>
              <img src="/image/Collectible Details Contact Address.svg" />
              <div className={styles.dataWrapper}>
                <h3>Contract Address</h3>
                <div>0x651sdfddfsfs...shslf</div>
              </div>
            </div>
          </div>
        </div>
        <TransactionRecord />
      </div>
    </>
  );
}
