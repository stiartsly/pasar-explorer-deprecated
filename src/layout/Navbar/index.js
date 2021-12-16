import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StandardButton } from '../../components/Buttons';
import { routes } from '../routes';
import * as styles from './style.module.scss';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div
        className={[
          styles.navbarContainer,
          mobileMenu && styles.mobileShow,
        ].join(' ')}
      >
        <div
          className={[styles.navsWrapper, mobileMenu && styles.mobileShow].join(
            ' '
          )}
        >
          {routes.map(
            (route, index) =>
              route.title && (
                <Link
                  key={index}
                  to={route.path}
                  className={
                    location.pathname == route.path ? styles.active : null
                  }
                >
                  <label>{route.title}</label>
                </Link>
              )
          )}
          <StandardButton title="Sign In" />
        </div>
      </div>
      <div className={styles.mobileMenu}>
        {mobileMenu ? (
          <img
            src="/image/icons8-close-window-50.png"
            onClick={() => setMobileMenu(false)}
          />
        ) : (
          <img
            src="/image/icons8-menu.svg"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>
    </>
  );
}
