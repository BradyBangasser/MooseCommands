import { CacheInsertOptions, MooseCacheOptions, ICache } from "../..";
import MooseClient from "..";
import MicroCache from "./microCache";
declare class MooseCache<Form = any> {
    private _lastSweptDate;
    private _cache;
    private _client;
    private _sizeLimit;
    readonly options: MooseCacheOptions;
    readonly id: string;
    /**
     * @class MooseCache
     * @param client DisCrack Client
     * @param options CrackCache Options
     */
    constructor(client: MooseClient, options: MooseCacheOptions);
    get lastSwept(): Date;
    get sizeLimit(): number;
    set sizeLimit(size: number);
    private _dumbSweeper;
    private _smartSweeper;
    clean(reason?: string, amount?: number): Map<string, ICache<Form>>;
    insert(id: string, value: Form, options: CacheInsertOptions): string;
    private _deleteOldest;
    sweepCache(newSize?: number | "all" | {
        newSize?: number;
        all?: boolean;
        sweepAmount?: number;
    }, reason?: string): Map<string, ICache<Form>>;
    private _reasonFormatter;
    isFull(): boolean;
    generateCacheItem(value: Form, expires?: Date): ICache<Form>;
    static MicroCache: typeof MicroCache;
    MicroCache: typeof MicroCache;
}
export default MooseCache;
