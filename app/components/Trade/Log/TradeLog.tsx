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

//TODO: empty data state

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
        {
          (tradeRecords && tradeRecords.length > 0 && tradeRecords.map((item, key) => {
            return (
              <TradeLogEntry tradeRecord={item} key={key} />
            )
          })) ?? <p>HI</p>
        }
      </div>
    </div>
  )
}