'use client'

import styles from './layout.module.scss'
import React, {useEffect, useState} from "react";
import {SimpleOption} from "@/app/types/appTypes";
import SimpleSelect from "@/app/components/Select/SimpleSelect";

/**
 * Page that displays trade history for different time periods, aggregated by different intervals
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function TradingHistory() {

  const baseClass = "trading-history-page"
  const quickPicks: SimpleOption[] =
    [
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'This Week', value: 'this-week'},
      {label: 'This Month', value: 'this-month'},
      {label: 'Last 3 Months', value: 'last-3-months'},
      {label: 'Last 6 Months', value: 'last-6-months'},
      {label: 'All-time', value: 'all-time'},
    ]

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
  }, [])


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__page-row`] + ' ' + styles[`${baseClass}__controls`]}>
        <div className={styles[`${baseClass}__control`]}>
          Date Picker - From
        </div>
        <div className={styles[`${baseClass}__control`]}>
          Date Picker - To
        </div>
        <div className={styles[`${baseClass}__control`]}>
          <SimpleSelect options={quickPicks}/>
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        Entry #1
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        Entry #2
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        Entry #3
      </div>
    </div>
  )
}