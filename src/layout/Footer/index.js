import React from 'react';
import * as styles from './style.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.boldtext}>⚡ Powered by Elastos</div>
          <div>
            Pasar Explorer is a Collectible Explorer and <br />
            Analytics Platform for Elastos NFTs, on the <br />
            Elastos Smart Chain (ESC).
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.social}>
              <img src="image/Telegram.svg" />
              <img src="image/Twitter.svg" />
              <img src="image/Discord.svg" />
              <img src="image/Goto Top.svg" className={styles.gototop} />
            </div>
            <div>
              <img src="image/Dark.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divide} />
      <div className={styles.row}>
        <div className={styles.column}>Pasar Protocol 2021 | Donate ❤️</div>
        <div className={styles.column}>Privacy Policy | Disclaimer️</div>
      </div>
    </div>
  );
}
