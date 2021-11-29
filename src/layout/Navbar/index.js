import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StandardButton } from '../../components/Buttons';
import { routes } from '../routes';
import * as styles from './style.module.scss';

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navsWrapper}>
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={location.pathname == route.path ? styles.active : null}
            >
              <span>{route.title}</span>
            </Link>
          ))}
          <StandardButton title="Sign In" />
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="image/Pasar.svg" width="360px" />
      </div>
    </>
  );
}
