import { ICache, MicroCacheCacheResultOptions } from "../..";
declare class MicroCache<K extends string, V> extends Map<K, ICache<V>> {
    private _cache;
    constructor(entries?: readonly [K, V]);
    set(key: K, value: V, expiration?: Date): this;
    get(key: K): V | undefined;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void): void;
    strictForEach(callbackfn: (value: ICache<V>, key: K, map: Map<K, ICache<V>>) => void): void;
    cacheResults<T = any>(name: string, callbackfn: (...args: any[]) => any, { args, expires, resultsDependOnArgs, capsSensitiveArgs }: MicroCacheCacheResultOptions): T;
    private _formatArgs;
}
export default MicroCache;
