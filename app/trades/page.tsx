'use client'

import BaseCard from "@/app/components/Card/BaseCard";
import React, {useEffect, useState} from "react";
import PageHeaderSection from "@/app/components/Section/page/header/PageHeaderSection";
import {TbPackageImport} from "react-icons/tb";
import SimpleButton from "@/app/components/Button/SimpleButton";
import TradeList from "@/app/components/Trade/List/TradeList";
import SimpleSelect from "@/app/components/Select/SimpleSelect";
import {SimpleOption} from "@/app/types/appTypes";
import TradeImportModal from "@/app/components/Modal/trade/TradeImportModal";
import {resolveIcon} from "@/app/services/resolver/iconResolverService";

/**
 * The trades page, showing all trades and allowing the user to upload new ones into the system
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function Trades() {

  const quickPicks: SimpleOption[] =
    [
      {label: 'Today', value: 'today', unit: 'days', count: 0},
      {label: 'Yesterday', value: 'yesterday', unit: 'days', count: 1},
      {label: 'This Week', value: 'this-week', unit: 'weeks', count: 1},
      {label: 'This Month', value: 'this-month', unit: 'months', count: 1},
      {label: 'Last 3 Months', value: 'last-3-months', unit: 'months', count: 3},
      {label: 'Last 6 Months', value: 'last-6-months', unit: 'months', count: 6},
      {label: 'All-time', value: 'all-time', unit: 'years', count: 25},
    ]

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [importModalActive, setImportModalActive] = useState(false)

  useEffect(() => {
  }, [])


  //  GENERAL FUNCTIONS

  /**
   * Toggles the import trades modal active/inactive
   */
  function toggleTradeImportModal() {
    setImportModalActive(true)
  }


  //  RENDER

  return (
    <>
      <div className="trades-page">
        <PageHeaderSection
          icon={resolveIcon('CgArrowsExchange')}
          title={'Trades'}
          controls={
            [
              <SimpleButton
                key={0}
                variant={"primary"}
                text={'Import Trades'}
                icon={<TbPackageImport/>}
                iconPosition={"right"}
                handler={toggleTradeImportModal}
                plain={true}
              />
            ]
          }
        />
        <BaseCard
          hasBorder={false}
          hasOverflow={true}
          title={'Trade Log'}
          content={[<TradeList hasAdmin={false} key={0}/>]}
          controls={[<SimpleSelect options={quickPicks} key={0} handler={() => null} val={''} />]}
        />
      </div>
      <TradeImportModal active={importModalActive} closeHandler={() => setImportModalActive(false)} />
    </>
  )
}

