import React, {ReactNode} from "react";
import styles from "@/app/components/Navigation/menu/SideNavMenuItem.module.scss";
import Link from "next/link";

/**
 * Represents each individual menu item that can redirect the app wherever it needs to go
 *
 * @param route nextjs route link
 * @param label display text
 * @param active if true, highlight as active
 * @param icon icon to display
 * @param handler on click function
 * @author Stephen Prizio
 * @version 0.0.1
 */
function SideNavMenuItem(
  {
    route = '',
    label = '',
    active = false,
    icon = null,
    handler
  }: Readonly<{
    route: string,
    label: string,
    active: boolean,
    icon: ReactNode,
    handler: Function
  }>) {

  const baseClass = "side-nav-menu-item"


  //  RENDER

  return (
    <Link href={route} className={styles[`${baseClass}__reset-anchor`]} onClick={() => handler(route)}>
      <div className={styles[baseClass] + ' ' + (active ? styles[`${baseClass}--active`] : '')}>
        <div className={styles[`${baseClass}__item`] + ' - ' + styles[`${baseClass}__icon`]}>
          <div className={styles[`${baseClass}__icon-wrapper`]}>
            {icon}
          </div>
        </div>
        <div className={styles[`${baseClass}__item`] + ' - ' + styles[`${baseClass}__text`]}>
          <div className={styles[`${baseClass}__content`]}>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SideNavMenuItem;