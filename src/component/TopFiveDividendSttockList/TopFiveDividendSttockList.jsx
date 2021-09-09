import React from 'react'
import styles from './TopFiveDividendStockList.module.css'

const TopFiveDividendStockList = (props) => {
    const renderListItems = () => {
        return props.stocks.map((stock) => {
            return (
              <li className={styles.listitem} key={stock.name}>
                <div>{stock.name}</div>
                <div>{stock.amount} Unit</div>    
              </li>
            )
        })
    }
    
    return(
    <div className={styles.container}>
        <h1 className={styles.header}>Top Five Dividend Stock</h1>
        <ul className={styles.dividendlist}>{renderListItems()}</ul>
    </div>
    )
    }

export default TopFiveDividendStockList