import React from "react";

import styles from './headerList.module.scss';


interface HeaderListProp{
    visibleList:boolean
}

const HeaderList = () => {



    const dataList = [
        {
            path:'',
            text:'Мои объявления',
        },

        {
            path:'',
            text:'Заказы',
        },

        {
            path:'',
            text:'Мои отзывы',
        },

        {
            path:'',
            text:'Избранное',
        },

        {
            path:'',
            text:'Сообщения',
        },

        {
            path:'',
            text:'Уведомления',
            secondSpan:'1'
        },

        {
            path:'',
            text:'Кошелёк',
            secondSpan:`0 р.`
        },

        {
            path:'',
            text:'Платные услуги',
        },

        {
            path:'',
            text:'Управление профилем',
        },

        {
            path:'',
            text:'Настройки',
        }
    ]




    return(
        <ul className={styles.list}>
            {
                dataList.map((data, index) => {
                    return(
                        <li key={index} className={styles.list__item}>
                            <a href={data.path} className={styles.list__link}>

                                {
                                    data.secondSpan 
                                        ? 
                                            <>
                                                <span> {data.text}</span>
                                                <span>{data.secondSpan}</span>
                                            </>

                                        :
                                            <>
                                                {data.text}
                                            </>
                                }
                        
                            </a>
                        </li>
                    )
                })
                
            }
            <li className={styles.list__item}>
                <span className={`${styles.list__link} ${styles.list__linkExit}`}>
                    Выйти
                </span>
            </li>
        </ul>
    )
}

export default HeaderList;