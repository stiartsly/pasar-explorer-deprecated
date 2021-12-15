import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import Sticker from '../components/Sticker';
import Pagination from '../components/Pagination';
import * as styles from '../styles/collectibleslist.module.scss';

export default function CollectiblesList() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = React.useState(false);
  const [stickers, setStickers] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const res = await fetch(
      `https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=${page}`
    );
    const json = await res.json();
    setStickers(json.data.result);
    setLoading(false);
  }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="100px" />
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.stickers_list}>
        <div className={styles.header}>
          <h1>Newest Collectibles</h1>
          <div>
            <Pagination page={page} pages={10} onChange={setPage} />
          </div>
        </div>
        <div className={styles.content}>
          {loading && (
            <img src="/image/Dual Ring-1s.svg" className={styles.loading} />
          )}
          {stickers.map(sticker => {
            return (
              <>
                <Sticker props={sticker} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
