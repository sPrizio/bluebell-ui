'use client'

import React, {useState} from "react";
import styles from "@/app/components/Navigation/desktop/DesktopSideNav.module.scss";
import Avatar from "@/app/components/Navigation/avatar/Avatar";
import SideNavMenuItem from "@/app/components/Navigation/menu/SideNavMenuItem";
import MainLogo from "@/app/components/Navigation/logo/MainLogo";
import {CoreConstants} from "@/app/constants";
import {resolveIcon} from "@/app/services/resolver/iconResolverService";

/**
 * Navigation side-panel for desktop views
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
function DesktopSideNav() {

  const baseClass = 'desktop-side-nav'

  const [currentTab, setCurrentTab] = useState('/trades')


  //  GENERAL FUNCTIONS

  /**
   * Handles selecting a new tab on link clicks
   *
   * @param val new route
   */
  function handleClick(val: string) {'/'
    setCurrentTab(val)
  }


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__logo`]}>
        <MainLogo />
      </div>
      {/*<div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__avatar`]}>
        <Avatar />
      </div>*/}
      <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__menu`]}>
        {
          CoreConstants.Routes.map((item, key) => {
            return (
              <SideNavMenuItem
                key={key}
                route={item.route}
                label={item.label}
                active={currentTab === item.route}
                icon={resolveIcon(item.icon)}
                handler={handleClick}
              />
            )
          })
        }
      </div>
      <div className={styles[`${baseClass}__item`] + ' ' + styles[`${baseClass}__footer`]}>
        <div>
          <strong>&nbsp;bluebell&nbsp;</strong>&copy;&nbsp;2024
          <br/>
          <br/>
          All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default DesktopSideNav;