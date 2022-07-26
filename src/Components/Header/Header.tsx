import React from 'react';

import HeaderTop from './HeaderTop/HeaderTop';
import CategoryHeader from './HeaderBottom/HeaderBottom';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <CategoryHeader />
    </header>
  );
};

export default Header;
