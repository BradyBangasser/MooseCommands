import { ICache, MicroCacheCacheResultOptions } from "../.."

class MicroCache<K extends string, V> extends Map<K, ICache<V>> {

    private _cache: { [key: string]: any } = {}
    constructor(entries?: readonly [K, V]) {
        // @ts-expect-error
        super(entries)
    }

    // @ts-expect-error
    override set(key: K, value: V, expiration?: Date): this {
        return super.set(key, {
            id: key,
            expires: expiration,
            value,
            time: new Date()
        })
    }

    // @ts-expect-error
    override get(key: K): V | undefined {
        return super.get(key)?.value
    }

    // @ts-expect-error
    override forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void): void {

        const displayMap = new Map<K, V>()

        super.forEach((cachedVal, cachedKey) => {
            displayMap.set(cachedKey, cachedVal.value)
        })

        super.forEach((cacheVal, cacheKey) => {
            callbackfn(cacheVal.value, cacheKey, displayMap)
        })

        displayMap.forEach((val, key) => {
            super.set(key, { value: val, id: key, time: new Date()})
        })
    }

    public strictForEach(callbackfn: (value: ICache<V>, key: K, map: Map<K, ICache<V>>) => void): void {
        super.forEach(callbackfn)
    }

    public cacheResults<T = any>(name: string, callbackfn: (...args: any[]) => any, { args = [], expires, resultsDependOnArgs = true, capsSensitiveArgs = true }: MicroCacheCacheResultOptions): T {

        if (typeof this._cache[name] !== "undefined") {
            if (resultsDependOnArgs && args.length > 0) {
                if (typeof this._cache[name][this._formatArgs(args, capsSensitiveArgs)] !== "undefined") return this._cache[name][this._formatArgs(args, capsSensitiveArgs)]
            } else {
                if (typeof this._cache[name] !== "undefined") return this._cache[name]
            }
        }

        const result = callbackfn(...args)

        if (resultsDependOnArgs && args.length > 0) {
            this._cache[name][this._formatArgs(args, capsSensitiveArgs)] = { expires, result }
        } else this._cache[name] = { expires, result }

        return result
    }

    private _formatArgs(args: any, capsSensitive: boolean) {

        const jsonArgs = JSON.stringify(args, null, "").replace(/[\s]/gi, "")

        if (capsSensitive) return jsonArgs
        return jsonArgs.toLowerCase()
    }
}

export default MicroCache