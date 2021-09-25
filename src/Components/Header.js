import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Starwars } from '../Assets/starwars.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="logo">
          <Starwars />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
