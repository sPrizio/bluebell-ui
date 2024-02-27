/**
 * Gets the base api url
 *
 * @returns {string} url
 */
export function baseUrl(): string {
    return 'http://localhost:8080'
}

/**
 * Gets the domain url
 *
 * @returns {string} url
 */
export function getDomain(appendVal: string): string {
    return baseUrl() + '/api/v1' + appendVal
}

/**
 * Gets the transaction url
 *
 * @returns {string} url
 */
export function getTransactionDomain(): string {
    return getDomain('/transaction')
}

/**
 * Gets the news url
 *
 * @returns {string} url
 */
export function getNewsDomain(): string {
    return getDomain('/news')
}