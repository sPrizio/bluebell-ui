//  CLIENT

export type StandardJsonResponse = {
    success?: boolean,
    data?: any,
    message?: string,
    internalMessage?: string,
}


//  NEWS

export type NewsEntry = {
    content: string,
    country: string,
    empty: boolean,
    forecast: string,
    previous: string,
    severity: string,
    severityLevel: number,
    uid: string
}

export type NewsSlot = {
    active: boolean,
    empty: boolean,
    entries: Array<NewsEntry>,
    time: string,
    uid: string
}

export type News = {
    active: boolean,
    date: string,
    empty: boolean,
    future: boolean,
    past: boolean,
    slots: Array<NewsSlot>,
    uid: string
}