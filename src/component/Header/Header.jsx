import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/icons/chart-line.svg';
    
const Header = () => {
        return <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo}/>
                <span>Stock</span>
            </div>

            <div className={styles.userContainer}>
                <div className={styles.user}>GP</div>
                <span>Gun P</span>
            </div>
        </header>
    };

export default Header;