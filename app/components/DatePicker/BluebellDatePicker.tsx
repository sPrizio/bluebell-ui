import React from "react";
import styles from './BluebellDatePicker.module.scss'
import DatePicker from "react-datepicker";

/**
 * Custom datepicker implemented around react-datepicker
 *
 * @param label optional display label above the datepicker
 * @param val tracked state variable
 * @param handler handler function
 * @param isRounded add rounded borders (optional)
 * @param disableWeekends if true, disable weekends
 * @author Stephen Prizio
 * @version 0.0.1
 */
function BluebellDatePicker(
  {
    label = '',
    val = null,
    handler,
    isRounded = false,
    disableWeekends = false
  }: Readonly<
    {
      label?: string
      val: Date | null,
      handler: Function,
      isRounded?: boolean,
      disableWeekends?: boolean
    }>
) {

  const baseClass = "bluebell-date-picker"


  //  GENERAL FUNCTIONS

  /**
   * Returns true if the given date is a week day
   * @param val
   */
  function isWeekday(val: Date) {
    if (disableWeekends) {
      return val.getDay() !== 0 && val.getDay() !== 6
    }

    return true
  }


  //  RENDER

  return (
    <div className={styles[baseClass] + ' ' + styles[`${baseClass}--is-rounded`]}>
      {
        label && label.length > 0 ?
          <div className={styles[`${baseClass}__label`]}>
            {label}
          </div>
          : null
      }
      <DatePicker
        dateFormat={'MMM do, yyyy'}
        selected={val}
        onChange={(date) => handler(date)}
        filterDate={isWeekday}
      />
    </div>
  )
}

export default BluebellDatePicker;