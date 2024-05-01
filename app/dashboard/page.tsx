'use client'

import styles from './layout.module.scss'
import React, {useEffect, useState} from "react";
import BaseCard from "@/app/components/Card/BaseCard";
import AccountBalance from "@/app/components/Account/AccountBalance";
import AccountEquityChart from "@/app/components/Chart/Account/AccountEquityChart";
import {CoreConstants} from "@/app/constants";
import {News, StandardJsonResponse} from "@/app/types/apiTypes";
import moment from "moment";
import MarketNews from "@/app/components/News/MarketNews";
import TradeLog from "@/app/components/Trade/Log/TradeLog";
import AccountActivity from "@/app/components/Account/AccountActivity";

/**
 * The dashboard page
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function Dashboard() {

  const baseClass = "dashboard-page"

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [news, setNews] = useState<Array<News>>([])

  useEffect(() => {
    getNews()
  }, [])


  //  GENERAL FUNCTIONS

  /**
   * Obtains this week's news
   */
  async function getNews() {

    setIsLoading(true)

    try {
      const res = await fetch(
        CoreConstants.ApiUrls.News.GetInterval
          .replace('{start}', moment().startOf('day').format(CoreConstants.DateTime.ISODateFormat))
          .replace('{end}', moment().startOf('day').add(1, 'days').format(CoreConstants.DateTime.ISODateFormat))
          + '&locales=CAN&locales=USD',
        {method: 'GET'}
      )

      if (res.ok) {
        const data: StandardJsonResponse = await res.json()
        console.log(data)
        if (data.success) {
          setNews(data.data)
        }
      }
    } catch (e) {
      console.log(e)
    }

    setIsLoading(false)
  }


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__page-column`]}>
          <div className={styles[`${baseClass}__page-component`]}>
            <BaseCard
              title={'Balance'}
              subtitle={'CMC Markets MT4 CFD'}
              hasBorder={false}
              hasOverflow={false}
              content={[<AccountBalance key={0}/>]}
            />
          </div>
          <div className={styles[`${baseClass}__page-component`]}>
            <BaseCard
              title={'Trade Log'}
              subtitle={'Last 6 trading sessions'}
              hasBorder={false}
              hasOverflow={false}
              content={[<TradeLog key={0} tradeRecords={[]}/>]}
            />
          </div>
        </div>
        <div className={styles[`${baseClass}__break`]}/>
        <div className={styles[`${baseClass}__page-column`]}>
          <div className={styles[`${baseClass}__page-component`]}>
            <BaseCard
              title={'Equity'}
              subtitle={'Last 6 months'}
              hasBorder={false}
              hasOverflow={false}
              content={[<AccountEquityChart key={0}/>]}
            />
          </div>
          <div className={styles[`${baseClass}__page-component`]}>
            <BaseCard
              title={'Activity'}
              subtitle={'A look at your account activity'}
              hasBorder={false}
              hasOverflow={false}
              content={[<AccountActivity key={0} />]}
            />
          </div>
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__page-column`]}>
          <div className={styles[`${baseClass}__page-component`]}>
            <BaseCard
              title={moment().startOf('day').format(CoreConstants.DateTime.ISOMonthWeekDayFormat)}
              subtitle={'Today\'s News & Events'}
              hasBorder={false}
              hasOverflow={false}
              content={[<MarketNews key={0} news={news} showOnlyImportant={true} hideDate={true}/>]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

