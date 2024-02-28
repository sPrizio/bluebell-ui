'use client'

import styles from './layout.module.scss'
import React, {useEffect, useState} from "react";
import BaseCard from "@/app/components/Card/BaseCard";
import AccountBalance from "@/app/components/Account/AccountBalance";
import AccountEquityChart from "@/app/components/Chart/Account/AccountEquityChart";

/**
 * The dashboard page
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function Dashboard() {

  const baseClass = "dashboard-page"

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
  }, [])


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__page-column`]}>
          <BaseCard
            title={'Balance'}
            subtitle={'CMC Markets MT4 CFD'}
            hasBorder={false}
            hasOverflow={false}
            content={[<AccountBalance key={0} />]}
          />
        </div>
        <div className={styles[`${baseClass}__break`]}/>
        <div className={styles[`${baseClass}__page-column`]}>
          <BaseCard
            title={'Equity'}
            subtitle={'Last 6 months'}
            hasBorder={false}
            hasOverflow={false}
            content={[<AccountEquityChart key={0} />]}
          />
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__page-column`]}>
          <BaseCard
            title={'Thursday, February 22nd'}
            subtitle={'Upcoming News & Events'}
            hasBorder={false}
            hasOverflow={false}
            content={[<div key={0}>Market News for Today, showing only the given locales</div>]}
          />
        </div>
        <div className={styles[`${baseClass}__break`]}/>
        <div className={styles[`${baseClass}__page-column`]}>
          <BaseCard
            title={'Trade Log'}
            subtitle={'Last 6 trading sessions'}
            hasBorder={false}
            hasOverflow={false}
            content={[<div key={0}>Last 5 or 6 days</div>]}
          />
        </div>
      </div>
      <div className={styles[`${baseClass}__page-row`]}>
        <div className={styles[`${baseClass}__page-column`]}>
          <BaseCard
            title={'Activity'}
            subtitle={'A look at your account activity'}
            hasBorder={false}
            hasOverflow={false}
            content={[<div key={0}>Chart that shows trade profit, withdrawals & deposits per month</div>]}
          />
        </div>
      </div>
    </div>
  )
}

