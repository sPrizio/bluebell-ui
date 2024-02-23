import {MdDashboard} from "react-icons/md";
import PageHeaderSection from "@/app/components/Section/page/header/PageHeaderSection";
import React from "react";
import styles from './layout.module.scss'

/**
 * The default layout for the dashboard page
 *
 * @author Stephen Prizio
 * @version 0.0.1
 */
export default function DashboardLayout({children}: {children: React.ReactNode}) {

  const baseClass = "dashboard-page"


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <PageHeaderSection
        title={'Hello, Stephen'}
        controls={[]}
        icon={<MdDashboard/>}
      />
      <div>
        {children}
      </div>
    </div>
  )
}