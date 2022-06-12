import React from "react";

import HeaderTop from "./HeaderTop/HeaderTop";

import styles from './header.module.scss';

const Header = () => {
    return(
        <header className={styles.header}>
            <HeaderTop />
        </header>
    )
}

export default Header;