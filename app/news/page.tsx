'use client'

import React, {useEffect, useState} from "react";
import styles from './layout.module.scss'
import {CoreConstants} from "@/app/constants";
import moment from "moment";
import {News, StandardJsonResponse} from "@/app/types/apiTypes";
import BaseCard from "@/app/components/Card/BaseCard";
import PageLoader from "@/app/components/Loader/PageLoader";
import MarketNews from "@/app/components/News/MarketNews";

/**
 * The market news page
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function News() {

  const baseClass = "news-page"

  const [isLoading, setIsLoading] = useState(false)
  const [news, setNews] = useState<Array<News>>([])

  useEffect(() => {
    getNews()
  }, []);

  /**
   * Obtains this week's news
   */
  async function getNews() {

    setIsLoading(true)

    try {
      const res = await fetch(
        CoreConstants.ApiUrls.News.GetInterval
          .replace('{start}', moment().startOf('week').add(1, 'days').format(CoreConstants.DateTime.ISODateFormat))
          .replace('{end}', moment().startOf('week').add(6, 'days').format(CoreConstants.DateTime.ISODateFormat)),
        {method: 'GET'}
      )

      if (res.ok) {
        const data: StandardJsonResponse = await res.json()
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
    <div className={styles[`${baseClass}__content`]}>
      {isLoading ? <PageLoader /> : null}
      <MarketNews news={news} />
    </div>
  )
}