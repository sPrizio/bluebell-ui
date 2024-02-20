import styles from '@/app/components/Select/SimpleSelect.module.scss'
import React, {useState} from "react";
import {IoChevronDown} from "react-icons/io5";
import {SimpleOption} from "@/app/types/appTypes";

/**
 * Base select component that can be used wherever a select input is required
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
function SimpleSelect({options = []}: Readonly<{ options: Array<SimpleOption> }>) {

  const baseClass = "simple-select"

  const [active, setActive] = useState(false)
  const [currentSelection, setCurrentSelection] = useState<SimpleOption>(options[0])


  //  GENERAL FUNCTIONS

  /**
   * Toggles the menu active
   */
  function toggleActive() {
    setActive(!active)
  }

  /**
   * Returns true if the given value is equal to the current selection
   *
   * @param val currently selected menu item
   */
  function isCurrentSelection(val: SimpleOption) {
    return currentSelection.value === val.value
  }

  /**
   * Sets the current selection to be the value of the given option
   *
   * @param val clicked item
   */
  function handleSelect(val: SimpleOption) {
    setCurrentSelection(val)
  }


  //  RENDER

  return (
    <div className={styles[`${baseClass}__wrapper`]} onClick={toggleActive}>
      <div className={styles[baseClass] + ' ' + (active ? styles[`${baseClass}--active`] : '')}>
        <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__content`]}>
          {currentSelection.label}
        </div>
        <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__icon`]}>
          <IoChevronDown/>
        </div>
      </div>
      <div className={styles[`${baseClass}__menu`] + ' ' + (active ? styles[`${baseClass}__menu--active`] : '')}>
        { options?.map((item, key) => {
          return (
            <div
              key={key}
              className={styles[`${baseClass}__menu-item`] + ' ' + (isCurrentSelection(item) ? styles[`${baseClass}__menu-item--active`] : '')}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </div>
          ) ?? null
        }) }
      </div>
    </div>
  )
}

export default SimpleSelect;