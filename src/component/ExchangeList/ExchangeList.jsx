import React from 'react'
import styles from './ExchangeList.module.css'

const ExchangeList = (props) => {
    const renderListItems = () => {
        return props.exchanges.map(exchange => {
            return (
              <li className={styles.listitem} key={exchange.name}>
                <div className={styles.dot}></div>
                <div className={styles.name}>{exchange.name}</div>
                <div className={styles.index}>{exchange.index}</div>    
                <div className={styles.percent}>{exchange.change}</div>    
              </li>
            )
        })
    }

    return(
    <div className={styles.container}>
        <h1 className={styles.header}>Exchange</h1>
        <ul className={styles.exchangelist}>{renderListItems()}</ul>
    </div>
    )
}
export default ExchangeList