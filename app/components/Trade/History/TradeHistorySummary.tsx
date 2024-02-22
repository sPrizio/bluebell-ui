import React from "react";
import styles from '@/app/components/Trade/History/TradeHistorySummary.module.scss'
import {formatNegativePoints, formatNumberForDisplay} from "@/app/services/data/dataIntegrityService";

/**
 * Renders a summary table for trades within a time span
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
function TradeHistorySummary() {

  const baseClass = "trade-history-summary"


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__column`]}>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__header`]}>
            <span className={styles[`${baseClass}__underlined-content`]}>Profit</span><br/>
            <small>Lowest Point</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__content`]}>
            ${formatNumberForDisplay(335.68)}<br/>
            <small>${formatNumberForDisplay(-48.53)}</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__break`] + ' ' + styles[`${baseClass}__break--active`]}/>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__header`]}>
            <span className={styles[`${baseClass}__underlined-content`]}>Points</span><br/>
            <small>Gained</small><br/>
            <small>Lost</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__content`]}>
            {formatNegativePoints(98.42)}<br/>
            <small>{formatNumberForDisplay(217.98)}</small><br/>
            <small>{formatNegativePoints(-119.56)}</small>
          </div>
        </div>
      </div>
      <div className={styles[`${baseClass}__break`]}/>
      <div className={styles[`${baseClass}__column`]}>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__header`]}>
            <span className={styles[`${baseClass}__underlined-content`]}>Largest Win</span><br/>
            <small>Average</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__content`]}>
            {formatNumberForDisplay(128.32)}<br/>
            <small>{formatNumberForDisplay(41.87)}</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__break`] + ' ' + styles[`${baseClass}__break--active`]}/>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__header`]}>
            <span className={styles[`${baseClass}__underlined-content`]}>Biggest Loss</span><br/>
            <small>Average</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__content`]}>
            {formatNumberForDisplay(48.53)}<br/>
            <small>{formatNumberForDisplay(21.14)}</small>
          </div>
        </div>
      </div>
      <div className={styles[`${baseClass}__break`]}/>
      <div className={styles[`${baseClass}__column`]}>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__header`]}>
            <span className={styles[`${baseClass}__underlined-content`]}>Win %</span><br/>
            <small>9 wins</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__content`]}>
            56%<br/>
            <small>16 trades</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__break`] + ' ' + styles[`${baseClass}__break--active`]}/>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__header`]}>
            <span className={styles[`${baseClass}__underlined-content`]}>Profitability</span><br/>
            <small>Retention</small>
          </div>
        </div>
        <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__column--no-margin`]}>
          <div className={styles[`${baseClass}__content`]}>
            {formatNegativePoints(2.56)}<br/>
            <small>65%</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeHistorySummary;