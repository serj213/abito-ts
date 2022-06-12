import React, { useEffect } from "react";

import styles from './headerAutorized.module.scss';

import HeaderList from "./HeaderList/HeaderList";

import userImg from '../../../assets/images/header/user-logo.png';



type PopupClick = MouseEvent & {
    path: Node[];
  };


const HeaderAutorized = () => {


    const [visibleList, setVisibleList] = React.useState<boolean>(false)
    const userRef = React.useRef(null)

    const visibleListHandler = () => {
        setVisibleList(true)
    }

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const _event = event as PopupClick;
    
          if (userRef.current && !_event.path.includes(userRef.current)) {
            console.log('dfdf');
            
            setVisibleList(false);
          }
        };
    
        document.body.addEventListener('click', handleClickOutside);
    
        return () => document.body.removeEventListener('click', handleClickOutside);
      }, []);
    

    return(
        <div className={styles.headerAuthorized}>
            <a href="#" className={styles.headerAuthorized__annunciation}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12.73 20C12.5542 20.3031 12.3018 20.5547 11.9982 20.7295C11.6946 20.9044 11.3504 20.9965 11 20.9965C10.6496 20.9965 10.3054 20.9044 10.0018 20.7295C9.69816 20.5547 9.44581 20.3031 9.27 20M21 16H1C1.79565 16 2.55871 15.6839 3.12132 15.1213C3.68393 14.5587 4 13.7956 4 13V8C4 6.14348 4.7375 4.36301 6.05025 3.05025C7.36301 1.7375 9.14348 1 11 1C12.8565 1 14.637 1.7375 15.9497 3.05025C17.2625 4.36301 18 6.14348 18 8V13C18 13.7956 18.3161 14.5587 18.8787 15.1213C19.4413 15.6839 20.2044 16 21 16Z"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={styles.headerAuthorized__annunciationCounter}>
                    <span>1</span>
                </div>
            </a>
            <a href="#" className={styles.headerAuthorized__messages}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>

            <button ref={userRef} onClick={visibleListHandler} className={styles.headerUser}>
            <img src={userImg} alt="" />
            <   span className={styles.headerUser__nickname}>Никнейм</span>

                {visibleList && <HeaderList />}
                
            </button>
        </div>
    )
}

export default HeaderAutorized;