'use client'

import styles from './layout.module.scss'
import React, {useEffect, useState} from "react";
import {SimpleOption} from "@/app/types/appTypes";
import SimpleSelect from "@/app/components/Select/SimpleSelect";
import BluebellDatePicker from "@/app/components/DatePicker/BluebellDatePicker";
import moment from "moment";
import BaseCard from "@/app/components/Card/BaseCard";
import TradeHistory from "@/app/components/Trade/History/TradeHistory";

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
      {label: 'Today', value: 'today', unit: 'days', count: 0},
      {label: 'Yesterday', value: 'yesterday', unit: 'days', count: 1},
      {label: 'This Week', value: 'this-week', unit: 'weeks', count: 1},
      {label: 'This Month', value: 'this-month', unit: 'months', count: 1},
      {label: 'Last 3 Months', value: 'last-3-months', unit: 'months', count: 3},
      {label: 'Last 6 Months', value: 'last-6-months', unit: 'months', count: 6},
      {label: 'All-time', value: 'all-time', unit: 'years', count: 25},
      {label: 'Custom', value: 'custom', unit: 'days', count: -1}
    ]

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(new Date())
  const [quickPick, setQuickPick] = useState(quickPicks[0].value)

  useEffect(() => {
  }, [])


  //  GENERAL FUNCTIONS

  /**
   * When the end date is changed, mark the time span as custom
   *
   * @param val custom date
   */
  function handleEndDateChange(val: Date) {
    setEndDate(val)
    setQuickPick('custom')
  }

  /**
   * Find the quick pick for associated value
   *
   * @param val test value
   */
  function getQuickPickForValue(val: string) {
    return quickPicks.find(qp => qp.value === val) ?? quickPicks[0]
  }

  /**
   * Handler for selecting a new option
   *
   * @param val selected option
   */
  function handleSelectChange(val: string) {
    setQuickPick(val)
    const pick = getQuickPickForValue(val)
    setStartDate(resolveQuickPick(pick, true))
    setEndDate(resolveQuickPick(pick, false))
  }

  /**
   * Resolves the date bounds depending on the selected option
   *
   * @param option simple option
   * @param start if true, this is the start of the period otherwise it is the end
   */
  function resolveQuickPick(option: SimpleOption, start: boolean) {

    if (start) {
      switch (option.value) {
        case 'yesterday':
          return moment().subtract(1, 'days').startOf('day').toDate()
        case 'this-week':
          return moment().startOf('week').add(1, 'days').toDate()
        case 'this-month':
          return moment().startOf('month').toDate()
        case 'last-3-months':
        case 'last-6-months':
          return moment().subtract(option.count, option.unit).toDate()
        case 'all-time':
          return moment().subtract(25, 'years').toDate()
        default:
          return moment().startOf('day').toDate()
      }
    } else {
      switch (option.value) {
        case 'yesterday':
          return moment().subtract(1, 'days').startOf('day').toDate()
        default:
          return moment().startOf('day').toDate()
      }
    }
  }


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__page-row`] + ' ' + styles[`${baseClass}__controls`]}>
        <div className={styles[`${baseClass}__control`] + ' ' + styles[`${baseClass}__control--datepicker`]}>
          <BluebellDatePicker
            label={'Start Date'}
            val={startDate}
            handler={setStartDate}
            isRounded={true}
            disableWeekends={true}
          />
        </div>
        <div className={styles[`${baseClass}__control`] + ' ' + styles[`${baseClass}__control--datepicker`]}>
          <BluebellDatePicker
            label={'End Date'}
            val={endDate}
            handler={handleEndDateChange}
            isRounded={true}
            disableWeekends={true}
          />
        </div>
        <div className={styles[`${baseClass}__control`]}>
          <SimpleSelect options={quickPicks} val={quickPick} handler={handleSelectChange}/>
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__history-wrapper`]}>
          <BaseCard
            subtitle={'Wednesday'}
            hasBorder={false}
            hasOverflow={true}
            title={'February 21st, 2024'}
            content={[<TradeHistory key={0}/>]}
          />
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__history-wrapper`]}>
          <BaseCard
            subtitle={'Tuesday'}
            hasBorder={false}
            hasOverflow={true}
            title={'February 20th, 2024'}
            content={[<TradeHistory key={0}/>]}
          />
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__history-wrapper`]}>
          <BaseCard
            subtitle={'Monday'}
            hasBorder={false}
            hasOverflow={true}
            title={'February 19th, 2024'}
            content={[<TradeHistory key={0}/>]}
          />
        </div>
      </div>
    </div>
  )
}