import React from "react";
import styles from '@/app/components/Trade/History/TradeHistory.module.scss'
import TradeHistorySummary from "@/app/components/Trade/History/TradeHistorySummary";
import TradeHistoryChart from "@/app/components/Chart/TradeHistoryChart";

function TradeHistory() {

  const baseClass = "trade-history"


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__chart`]}>
        <TradeHistoryChart />
      </div>
      <div className={styles[`${baseClass}__break`]}/>
      <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__summary`]}>
        <TradeHistorySummary/>
      </div>
    </div>
  )
}

export default TradeHistory;