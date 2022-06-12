import React from "react";

import styles from './headerNotAutorized.module.scss';

const HeaderNotAutorized = () => {
    return(
        <div className={styles.notAuthorized}>
            <a href="#" className={styles.notAuthorized__entrance}>
                Вход и регистрация
            </a>
        </div>
    )
}


export default HeaderNotAutorized