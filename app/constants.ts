import {getNewsDomain} from "@/app/services/configuration/configurationService";

export const CoreConstants = {
  Routes: [
    {
      route: '/account',
      label: 'Account',
      icon: 'MdAccountCircle',
    },
    {
      route: '/dashboard',
      label: 'Dashboard',
      icon: 'MdDashboard',
    },
    {
      route: '/trades',
      label: 'Trade Log',
      icon: 'CgArrowsExchange',
    },
    {
      route: '/trading-history',
      label: 'History',
      icon: 'MdOutlineHistory',
    },
    {
      route: '/news',
      label: 'Market News',
      icon: 'FaNewspaper',
    },
    {
      route: '/contact',
      label: 'Contact Us',
      icon: 'IoIosMail',
    },
    {
      route: '/report',
      label: 'Report Issue',
      icon: 'PiWarningCircleBold',
    },
  ],

  ApiUrls: {
    News: {
      Get: getNewsDomain() + '/get?date={date}',
      GetInterval: getNewsDomain() + '/get-for-interval?start={start}&end={end}',
      Fetch: getNewsDomain() + '/fetch-news'
    },
  },

  DateTime: {
    DatePickerDateFormat: 'dd/MM/yyyy',
    ISODateFormat: 'YYYY-MM-DD',
    ISODateLongMonthFormat: 'YYYY-MMMM-DD',
    ISODateTimeFormat: 'YYYY-MM-DDTHH:mm:ss',
    ISODayFormat: 'Do',
    ISOEasyDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    ISOLongMonthDayYearFormat: 'MMMM Do[,] YYYY',
    ISOMonthDayFormat: 'MMMM Do',
    ISOMonthFormat: 'MMMM',
    ISOMonthWeekDayFormat: 'dddd[,] MMMM Do',
    ISOShortMonthWeekDayFormat: 'dddd[,] MMM D',
    ISOYearFormat: 'YYYY',
    ISOMonthYearFormat: 'MMMM YYYY',
    ISOShortMonthFormat: 'MMM',
    ISOShortMonthDayFormat: 'MMM D',
    ISOShortMonthFullDayFormat: 'MMM Do',
    ISOShortestMonthFormat: 'MM',
    ISOShortMonthDayYearFormat: 'MMM Do[,] YYYY',
    ISOShortHourFormat: 'H:mm',
    ISOShortTimeFormat: 'HH:mm',
    ISOTimeFormat: 'HH:mm:ss',
    ISOWeekdayFormat: 'dddd'
  },

  CssConstants: {
    FontPrimary: '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    Black: '#000000',
    White: '#FFFFFF',
    ColorPrimary: '#0077E4',
    ColorSecondary: '#B142F5',
    ColorTertiary: '#2CDAE6',
    ColorSuccess: '#10D096',
    ColorDanger: '#FF316A',
    ColorLightGrey: 'rgb(239, 239, 247)',
    ColorDisplayGrey: 'rgb(186, 184, 195)'
  },
}