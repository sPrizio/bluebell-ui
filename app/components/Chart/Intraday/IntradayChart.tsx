import styles from './IntradayChart.module.scss'
import React from "react";
import Chart from 'react-apexcharts'

export function IntradayChart({series = [], options = {}}: {series: any, options: any}) {

  const baseClass = "intraday-chart"


  //  RENDER

  return (
    <div className={styles[baseClass]}>
      <div id={'chart'}>
        <Chart options={options} series={series} type="candlestick" height={500} />
      </div>
    </div>
  )
}