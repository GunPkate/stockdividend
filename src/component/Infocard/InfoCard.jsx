import React from 'react'

import styles from './InfoCard.module.css'
import classnames from 'classname'

const InfoCard = ({ title, stock, darkmode }) => {

const classes = classnames(styles.InfoCard,{
    [styles.darkmode]:darkmode
})

    return (<div className={classes}>
        <h1 className={styles.header}>{title}</h1>
        <div>
            <p className={styles.paragraph}>{stock.ticker}</p>
            <p className={styles.paragraph}>{stock.amount}</p>
        </div>
    </div>
    )
}

export default InfoCard