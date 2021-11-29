import React, { useState } from 'react';
import * as styles from './style.module.scss';

export default function Footer() {
  const [darkTheme, setDarkTheme] = useState(false);
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
              <img
                src="image/Goto Top.svg"
                className={styles.gototop}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
            <div className={styles.themeToggle}>
              <img
                src="image/Dark.svg"
                className={darkTheme ? styles.light : styles.dark}
                onClick={() => setDarkTheme(!darkTheme)}
              />
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
