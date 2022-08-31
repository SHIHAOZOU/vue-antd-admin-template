/**
 * localStroage
 */
// get
const getLocalStorage = (keyName:string) => {
    window.localStorage.getItem(keyName)
}
// get parse
const getLocalStorageParse = (keyName:string) => {
    let value = window.localStorage.getItem(keyName)
    try {
        return JSON.parse(value as string)
    } catch (error) {
        return value
    }
}
// set
const setLocalStorage = (keyName:string,value:any) => {
    window.localStorage.setItem(keyName,value)
}
//remove
const removeLocalStorage = (keyName:string) => {
    window.localStorage.removeItem(keyName)
}
//clear
const clearLocalStorage = () => {
    window.localStorage.clear()
}

/**
 * sessionStroage
 */
// get
const getSessionStorage = (keyName:string) => {
    window.sessionStorage.getItem(keyName)
}
// get parse
const getSessionStorageParse = (keyName:string) => {
    let value = window.sessionStorage.getItem(keyName)
    try {
        return JSON.parse(value as string)
    } catch (error) {
        return value
    }
}
// set
const setSessionStorage = (keyName:string,value:any) => {
    window.sessionStorage.setItem(keyName,value)
}
//remove
const removeSessionStorage = (keyName:string) => {
    window.sessionStorage.removeItem(keyName)
}
//clear
const clearSessionStorage = () => {
    window.sessionStorage.clear()
}

export {
    getLocalStorage,
    getLocalStorageParse,
    setLocalStorage,
    removeLocalStorage,
    clearLocalStorage,
    getSessionStorage,
    getSessionStorageParse,
    setSessionStorage,
    removeSessionStorage,
    clearSessionStorage
}