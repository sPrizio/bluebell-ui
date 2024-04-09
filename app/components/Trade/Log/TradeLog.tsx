import React from "react";
import styles from './TradeLog.module.scss';
import {TradeRecord} from "@/app/types/apiTypes";
import TradeLogEntry from "@/app/components/Trade/Log/TradeLogEntry";

/**
 * Component that renders the last few trading sessions
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function TradeLog({tradeRecords = []}: { tradeRecords: TradeRecord[] }) {

  const baseClass = "trade-log"


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__headers`]}>
        <div className={styles[`${baseClass}__header`]}>Date</div>
        <div className={styles[`${baseClass}__header`] + ' ' + styles[`${baseClass}__header--centered`]}>Trades</div>
        <div className={styles[`${baseClass}__header`] + ' ' + styles[`${baseClass}__header--centered`]}>P&L</div>
        <div className={styles[`${baseClass}__header`] + ' ' + styles[`${baseClass}__header--centered`]}>Points</div>
      </div>
      <div className={styles[`${baseClass}__entries`]}>
        <TradeLogEntry
          tradeRecord={{startDate: '2024-04-04', endDate: '2024-04-05', profit: 55.02, points: 6.99, trades: 21}}/>
        <TradeLogEntry
          tradeRecord={{startDate: '2024-04-03', endDate: '2024-04-04', profit: 313.03, points: 40.98, trades: 14}}/>
        <TradeLogEntry
          tradeRecord={{startDate: '2024-03-27', endDate: '2024-03-28', profit: -288.82, points: -36.43, trades: 12}}/>
        <TradeLogEntry
          tradeRecord={{startDate: '2024-03-26', endDate: '2024-03-27', profit: 120.57, points: 15.56, trades: 16}}/>
      </div>
    </div>
  )
}