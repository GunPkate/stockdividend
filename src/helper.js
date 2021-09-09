export const sortStockByDividendYield = (stocks) => {
    const year = getCurrentYear()
    // console.log(stocks)
    // console.log(year)
    // console.log(typeof(year))

    const sorted = stocks.sort((stockA,stockB) => {
        return stockB.dividends[year] - stockA.dividends[year]
        //a < b return 1
        //a > b return -1
    })
    
    return sorted
}

export const getTopFiveDividendStockList = (stocks) => {
    const sorted = sortStockByDividendYield(stocks)
    const year = getCurrentYear()
    
    return sorted.slice(0,5).map(stock => {
        return {
            ticker: stock.ticker,
            name: stock.name,
            amount: stock.dividends[year],
        }   
    })
}

export const getInfoCardData = (descriptor,stocks) => {
    if (descriptor === "yieldgrowth") {
        return calculateDividendGrowthStock(stocks)
    }else if(descriptor === "yieldhigest"){
        return calculateDividendHighest(stocks)
    }else if(descriptor === "yieldcurrent"){
        return calculateDividendCurrentYield(stocks)
    }
}

const calculateDividendCurrentYield = (stocks) => {
    const sorted = sortStockByDividendYield(stocks)
    const year =getCurrentYear()
    // console.log("sorted")
    // console.log(sorted)
    return {
        ticker: sorted[0].ticker,
        amount: sorted[0].dividends[year],
    }
}

//!!!!!!!!! Calculate Growth
export const calculateDividendGrowthStock = (stocks) => {
    const sortedByGrowth = stocks
    .map(stock =>{
        return calculateGrowth(stock)
    })
    .sort((stockA,stockB) => {
        return stockB.growth - stockA.growth
    });
    // console.log("sortedByGrowth")
    // console.log(sortedByGrowth)

    return {
        ticker: sortedByGrowth[0].ticker,
        amount: sortedByGrowth[0].growth+"%"
    }

}

const calculateGrowth = (stock) => {
    const year = getCurrentYear()
    const comparisonYear = year -3

    const total = stock.dividends[year] - stock.dividends[comparisonYear]
    stock.growth = total
    return stock
}
//!!!!!!!!!!! 

//!!!!!!!!!!!!!!!!!!!!!!!!!!  Total
export const calculateDividendHighest = (stocks) => {
    const  sortedByHighestDividendYield = stocks
    .map((stock) => {
    return calculateTotalDividend(stock)
    })
    .sort((stockA,stockB) => {
        return stockB.total - stockA.total
    }) 

    return {
        ticker: sortedByHighestDividendYield[0].ticker,
        amount: sortedByHighestDividendYield[0].total,
    }
}

const calculateTotalDividend = (stock) =>{
    let total = 0
    Object.keys(stock.dividends).forEach((key) => {
        total += stock.dividends[key]
    })
    stock.total = total
    return stock
}
//!!!!!!!!!!!!!!!!!!!!!!!!!! 

export const getCurrentYear = () => {
    const date = new Date()
    const year = date.getFullYear()

    return year
}
