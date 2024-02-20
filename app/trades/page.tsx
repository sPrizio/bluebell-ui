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
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'This Week', value: 'this-week'},
      {label: 'This Month', value: 'this-month'},
      {label: 'Last 3 Months', value: 'last-3-months'},
      {label: 'Last 6 Months', value: 'last-6-months'},
      {label: 'All-time', value: 'all-time'},
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
          controls={[<SimpleSelect options={quickPicks} key={0}/>]}
        />
        <br />
        Modal redesign
        <br />
        Trade History Page
        <br />
        SCSS refactor (variable reference cleanup, restructure nesting)
        <br />
        Contact us & Report Issue Pages
        <br />
        global loader between pages
        <br />
        update nav bar when clicking on user menu
        <br />
        Mobile re-haul when time allows (will start tracking tasks in git)
      </div>
      <TradeImportModal active={importModalActive} closeHandler={() => setImportModalActive(false)} />
    </>
  )
}

