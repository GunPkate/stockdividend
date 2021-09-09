import React from 'react'
import styles from './StockList.module.css'

const StockList = ({stocks}) => {
    const renderListItems = () => {
        return stocks.map((stock) => {

            return(
            <li className={styles.listItem} key={stock.ticker}>
                <div className={styles.listItemName}>{stock.name}</div>
                <div className={styles.listItemTicker}>{stock.ticker}</div>
                <div className={styles.listItemAsk}>{stock.ask}</div>
                <div className={styles.listItemBid}>{stock.bid}</div>
                <div className={styles.listItemDps}>{getDividendPerShare(stock)}</div>
                <div className={styles.listItemDpsspent}>{getDividendPer1000Spent(stock)}</div>
                <div className={styles.listItemPE}>{getPE(stock)}</div>
                <div className={styles.listItemSector}>{stock.sector}</div>
            </li>
            )
        }
        )}


    const getDividendPerShare = (stock) => {
        return "x"
    }
    const getDividendPer1000Spent = (stock) => {
        return "y"
    }
    const getPE = (stock) => {
        return "z"
    }

    return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2> Exchange</h2>
        </div>

        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                <div className={styles.nameHeader}>Name</div>
                <div className={styles.tickerHeader}>Ticker</div>
                <div className={styles.askHeader}>Ask</div>
                <div className={styles.bidHeader}>Bid</div>
                <div className={styles.dpsHeader}>Dividend per share</div>
                <div className={styles.dpsspentHeader}>Dividend per 1000 spent</div>
                <div className={styles.peHeader}>P/E</div>
                <div className={styles.sectorHeader}>Sector</div>
            </div>
            <ul className={styles.stockList}>{renderListItems()}</ul>
        </div>
    </div>
    )
}


export default StockList