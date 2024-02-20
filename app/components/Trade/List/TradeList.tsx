import styles from '@/app/components/Trade/List/TradeList.module.scss'
import React, {useState} from "react";
import moment from "moment";
import TradeListPagination from "@/app/components/Trade/List/Pagination/TradeListPagination";
import SimpleButton from "@/app/components/Button/SimpleButton";
import {MdDelete} from "react-icons/md";
import BaseModal from "@/app/components/Modal/BaseModal";
import {CoreConstants} from "@/app/constants";
import {formatNumberForDisplay} from "@/app/services/data/dataIntegrityService";

/**
 * Lists trades as a table, useful for reporting
 *
 * @param hasAdmin flag to show admin controls for trades
 * @author Stephen Prizio
 * @version 0.0.1
 */
function TradeList({hasAdmin = false}: Readonly<{ hasAdmin?: boolean }>) {

  const baseClass = 'trade-list'
  const [currentPage, setCurrentPage] = useState(0)
  const [adminDeleteActive, setAdminDeleteActive] = useState(false)


  //  GENERAL FUNCTIONS

  /**
   * Displays negative points with bracket instead of negative sign
   *
   * @param val number
   */
  function formatNegativePoints(val: number) {

    if (val < 0) {
      return '(' + formatNumberForDisplay(Math.abs(val)) + ')'
    }

    return val
  }

  /**
   * Changes the current page and fetches more trades
   *
   * @param val page number
   */
  function handlePageChange(val: number) {
    setCurrentPage(val)
    //  TODO: fetch more trades based on page number
  }

  /**
   * Toggles the admin delete modal
   */
  function toggleAdminDeleteModal() {
    setAdminDeleteActive(!adminDeleteActive)
  }

  /**
   * Formats the given number of seconds into a pretty display string
   *
   * @param seconds time in seconds
   */
  function formatTimeElapsed(seconds: number) {
    if (seconds < 60) {
      return seconds + 's'
    } else if (seconds < 3600) {
      return Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's'
    } else {
      return Math.floor(seconds / 3600) + 'h ' + Math.floor((seconds % 3600) / 60) + 'm ' + ((seconds % 3600) % 60) + 's'
    }
  }


  //  RENDER

  return (
    <>
      <div className={styles[baseClass]}>
        <table className={styles[`${baseClass}__table`]}>
          <thead>
          <tr>
            <th>Date</th>
            <th>Trade Id</th>
            <th>Open</th>
            <th>Price</th>
            <th>Type</th>
            <th>Size</th>
            <th>Symbol</th>
            <th>Close</th>
            <th>Price</th>
            <th>P/L ($)</th>
            <th>Points</th>
            <th>Duration</th>
            {hasAdmin ? <th></th> : null}
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{moment('2024.01.30 17:02:47', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortMonthFullDayFormat)}</td>
            <td>10245895</td>
            <td>{moment('2024.01.30 17:02:47', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortHourFormat)}</td>
            <td>{formatNumberForDisplay(17527.50)}</td>
            <td>Sell</td>
            <td>{formatNumberForDisplay(0.2)}</td>
            <td>ndaq100</td>
            <td>{moment('2024.01.30 17:07:20', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortHourFormat)}</td>
            <td>{formatNumberForDisplay(17542.83)}</td>
            <td className={styles[`${baseClass}__negative`]}>{formatNumberForDisplay(-82.73)}</td>
            <td>{formatNegativePoints(-15.33)}</td>
            <td>{formatTimeElapsed(273)}</td>
            {
              hasAdmin ?
                <td>
                  <div className={styles[`${baseClass}__table-admin`]}>
                    <SimpleButton icon={<MdDelete/>} iconPosition={"center"} variant={"primary"} plain={true}
                                  handler={toggleAdminDeleteModal}/>
                  </div>
                </td>
                : null
            }
          </tr>
          <tr>
            <td>{moment('2024.01.30 17:02:47', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortMonthFullDayFormat)}</td>
            <td>10247108</td>
            <td>{moment('2024.01.30 17:08:39', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortHourFormat)}</td>
            <td>{formatNumberForDisplay(17539.66)}</td>
            <td>Buy</td>
            <td>{formatNumberForDisplay(0.2)}</td>
            <td>ndaq100</td>
            <td>{moment('2024.01.30 17:10:15', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortHourFormat)}</td>
            <td>{formatNumberForDisplay(17550.59)}</td>
            <td className={styles[`${baseClass}__negative`]}>{formatNumberForDisplay(-58.99)}</td>
            <td>{formatNegativePoints(-10.93)}</td>
            <td>{formatTimeElapsed(96)}</td>
            {
              hasAdmin ?
                <td>
                  <div className={styles[`${baseClass}__table-admin`]}>
                    <SimpleButton icon={<MdDelete/>} iconPosition={"center"} variant={"primary"} plain={true}
                                  handler={toggleAdminDeleteModal}/>
                  </div>
                </td>
                : null
            }
          </tr>
          <tr>
            <td>{moment('2024.01.30 17:02:47', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortMonthFullDayFormat)}</td>
            <td>10247555</td>
            <td>{moment('2024.01.30 17:12:00', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortHourFormat)}</td>
            <td>{formatNumberForDisplay(17542.22)}</td>
            <td>Sell</td>
            <td>{formatNumberForDisplay(0.2)}</td>
            <td>ndaq100</td>
            <td>{moment('2024.01.30 19:31:25', CoreConstants.DateTime.ISOEasyDateTimeFormat).format(CoreConstants.DateTime.ISOShortHourFormat)}</td>
            <td>{formatNumberForDisplay(17480.08)}</td>
            <td className={styles[`${baseClass}__positive`]}>{formatNumberForDisplay(335.13)}</td>
            <td>{formatNegativePoints(62.14)}</td>
            <td>{formatTimeElapsed(8365)}</td>
            {
              hasAdmin ?
                <td>
                  <div className={styles[`${baseClass}__table-admin`]}>
                    <SimpleButton icon={<MdDelete/>} iconPosition={"center"} variant={"primary"} plain={true}
                                  handler={toggleAdminDeleteModal}/>
                  </div>
                </td>
                : null
            }
          </tr>
          </tbody>
        </table>

        <div>
          <TradeListPagination
            page={currentPage}
            pageSize={10}
            totalElements={100}
            totalPages={10}
            pageHandler={handlePageChange}
          />
        </div>
      </div>

      {/*TODO: delete handler on submission*/}
      <BaseModal
        title={'Delete Trade'}
        active={adminDeleteActive}
        content={[
          <div key={0}>
            Are you sure you want to delete the selected trade? This action cannot be undone.
          </div>
        ]}
        closeHandler={() => setAdminDeleteActive(false)}
      />
    </>
  )
}

export default TradeList;