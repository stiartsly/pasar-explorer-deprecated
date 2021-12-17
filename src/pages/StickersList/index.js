import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Sticker from '../../components/Sticker';
import Pagination from '../../components/Pagination';
import ShowSelect from '../../components/Pagination/ShowSelect';
import * as styles from './style.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

export default function StickersList() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [show_count, setShowCount] = useState(10);
  const [loading, setLoading] = React.useState(false);
  const [stickers, setStickers] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const res = await fetch(
      `https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=${page}&pageSize=${show_count}`
    );
    const json = await res.json();
    setPages(Math.ceil(json.data.total/show_count));
    setStickers(json.data.result);
    setLoading(false);
  }, [page, show_count]);
  const changeShowCount = (event) => {setShowCount(event.target.value)};
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <a href="/"><img alt="logo" src="/image/Pasar.svg" width="150px" /></a>
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.stickers_list}>
        <div className={styles.header}>
          <h2>Newest Collectibles</h2>
          <div>
            <Pagination page={page} pages={pages} onChange={setPage} />
          </div>
        </div>
        <div className={styles.content}>
          {loading && (
            <img src="/image/Dual Ring-1s.svg" className={styles.loading} />
          )}
          {stickers.map((item, index) => {
            return (
              <Sticker
                key={index}
                thumbnail={getThumbnail(item.thumbnail)}
                name={item.name}
                timestamp={getTime(item.createTime)}
                tokenIdHex={reduceHexAddress(item.tokenIdHex)}
                gasfee={(item.royalties / 10 ** 8).toFixed(7)}
                value={item.value!=undefined?item.value:0}
              />
            );
          })}
        </div>
        <div className={styles.bottom}>
          <h2>
            <ShowSelect count={show_count} onChange={changeShowCount}></ShowSelect>
          </h2>
          <div>
            <Pagination page={page} pages={pages} onChange={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
