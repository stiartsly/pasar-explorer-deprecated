import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Sticker from '../../components/Sticker';
import * as styles from './style.module.scss';
import { reduceHexAddress, getTime, getThumbnail } from '../../utils/common';

export default function StickersList() {
  const [stickers, setStickers] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      `https://assist.trinity-feeds.app/sticker/api/v1/listStickers?pageNum=1`
    );
    const json = await res.json();
    setStickers(json.data.result);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="100px" />
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.stickers_list}>
        {stickers.map(item => {
          return (
            <>
              <Sticker
                thumbnail={getThumbnail(item.thumbnail)}
                name={item.name}
                timestamp={getTime(item.createTime)}
                tokenIdHex={reduceHexAddress(item.tokenIdHex)}
                gasfee={(item.royalties / 10 ** 18).toFixed(13)}
                value={item.value}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
