/**
 * Checks whether the given data is valid and exists
 *
 * @param data test data
 */
export function hasData(data: any) {
    return data !== null && data !== undefined
}

/**
 * Checks if the given object is null, undefined or empty
 *
 * @param object data
 */
export function emptyObject(object: any) {

    for (const prop in object) {
        if (Object.hasOwn(object, prop)) {
            return false
        }
    }

    return true
}

/**
 * Formats a number for pretty display
 *
 * @param val number to format
 */
export function formatNumberForDisplay(val: number) {
    return val.toLocaleString()
}

export default hasData;