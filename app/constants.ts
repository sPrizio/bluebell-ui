import {getTransactionDomain} from "@/app/services/configuration/configurationService";

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
        Transaction: {
            GetTransactions: getTransactionDomain() + '/get-for-account?accountNumber={accountNumber}&accountType={accountType}',
            GetTransactionsPaginated: getTransactionDomain() + '/get-for-account?accountNumber={accountNumber}&accountType={accountType}&page={page}&pageSize={pageSize}',
        }
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
}