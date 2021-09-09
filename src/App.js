import styles from './App.module.css';
import ExchangeList from './component/ExchangeList/ExchangeList';
import Header from './component/Header/Header';
import InfoCard from './component/Infocard/InfoCard';
import StockList from './component/StockList/StockList';
import Subheader from './component/Subheader/Subheader';
import TopFiveDividendStockList from './component/TopFiveDividendSttockList/TopFiveDividendSttockList';
import data from './data'

import { getTopFiveDividendStockList,
         getInfoCardData,
         } from './helper';

function App() {

  return <div className="App">
    <Header/>
    <Subheader>
      <ExchangeList exchanges={data.exchanges}/>
      <TopFiveDividendStockList
        stocks={getTopFiveDividendStockList(data.stocks)}
      />
      <div className={styles.InfoCardContainer}>
        <InfoCard
            title="Highest dividend yield in current year"
            stock={getInfoCardData("yieldcurrent",data.stocks)}
        />
        <InfoCard
            title="Highest dividend last 10 year"
            stock={getInfoCardData("yieldhigest",data.stocks)}
        />
        <InfoCard
            title="Highest dividend yield growth in last 3 year"
            stock={getInfoCardData("yieldgrowth",data.stocks)}
            darkmode
        />

      </div>
    </Subheader>
    <div className={styles.dashboardContent}>
      <div className={styles.dashboardContentContainer}>
        <StockList stocks={data.stocks}/>
      </div>
    </div>
  </div>
}

export default App;
