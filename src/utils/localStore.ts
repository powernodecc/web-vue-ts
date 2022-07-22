export interface LocalStoreData {
    data: any
    expire?: number
}

const localStore = {
    set(key: string, data: any, expire: number = 0) {
        const cache: LocalStoreData = {data: data}
        if (expire !== undefined && expire !== null && expire > 0) {
            cache.expire = new Date().getTime() + expire * 1000
        }
        localStorage.setItem(key, JSON.stringify(cache));
    },
    get(key: string): any {
        const cacheStore = localStorage.getItem(key) as string
        if (cacheStore !== null) {
            const cache: LocalStoreData = JSON.parse(cacheStore)
            if (cache.expire !== null && cache.expire !== undefined && cache.expire < new Date().getTime()) {
                localStorage.removeItem(key)
                return null
            }
            return cache.data
        }
        return null
    },
    remove(key: string) {
        localStorage.removeItem(key)
    }
}
export default localStore