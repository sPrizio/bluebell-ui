import React from "react";
import styles from './MarketNews.module.scss'
import {News} from "@/app/types/apiTypes";
import moment from "moment";
import {CoreConstants} from "@/app/constants";
import {getFlagForCode} from "@/app/services/locale/localeService";

export default function MarketNews({news}: {news: News}) {

  const baseClass = "news"


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      {
        news.slots && news.slots.length > 0 && news.slots.map((item, key) => {
          return (
            <div key={key} className={styles[`${baseClass}__row`]}>
              <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__time-column`]}>
                {moment(item.time, CoreConstants.DateTime.ISOTimeFormat).format(CoreConstants.DateTime.ISOShortTimeFormat)}
              </div>
              <div className={styles[`${baseClass}__column`] + ' ' + styles[`${baseClass}__entry-column`]}>
                {
                  item.entries && item.entries.length > 0 && item.entries.map((subitem, subkey) => {
                    return (
                      <div key={subkey} className={styles[`${baseClass}__entry-content`]}>
                        <div className={styles[`${baseClass}__entry-content-item`] + ' ' + styles[`${baseClass}__country`]}>
                          <div className={styles[`${baseClass}__country-wrapper`]}>
                            {getFlagForCode(subitem.country)}
                          </div>
                        </div>
                        <div className={styles[`${baseClass}__entry-content-item`] + ' ' + styles[`${baseClass}__level`]}>
                          {subitem.severityLevel}
                        </div>
                        <div className={styles[`${baseClass}__entry-content-item`]}>
                          {subitem.content}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}