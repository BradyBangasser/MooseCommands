import { CacheInsertOptions, MooseCacheOptions, ICache } from "../..";
import MooseClient from "..";
import { MooseCacheError } from "../../extentions/error.extentions";
import MicroCache from "./microCache";

class MooseCache<Form = any> {

    private _lastSweptDate: Date = new Date()
    private _cache: Map<string, ICache<Form>> = new Map<string, ICache<Form>>()
    private _client: MooseClient
    private _sizeLimit: number
    readonly options: MooseCacheOptions
    readonly id: string

    /**
     * @class MooseCache
     * @param client DisCrack Client 
     * @param options CrackCache Options
     */

    constructor(client: MooseClient, options: MooseCacheOptions) {
        this._client = client
        this.options = options
        this.id = client.generateCacheId(options.group)
        client.reportCache(this)
        this._sizeLimit = options.size ?? 200
    }

    public get lastSwept() {
        return this._lastSweptDate
    }

    public get sizeLimit() {
        return this._sizeLimit
    }

    public set sizeLimit(size: number) {
        this._sizeLimit = size
        this._smartSweeper(size, "Size Limit Change")
    }

    private _dumbSweeper(reason: string = "No Reason Provided") {
        this._cache.clear()
        this._lastSweptDate = new Date()
        this._client.logger.log(`${this.id} was cleared at ${this._lastSweptDate.toLocaleTimeString("cst")}`)
        return this._cache
    }

    private _smartSweeper(amount: number = 50, reason: string = "No Reason Provied") {
        const sweepDate = new Date()

        if (amount >= this._cache.size) {
            return this._dumbSweeper(reason)
        }

        const ogLength = this._cache.size

        let sorted = [...this._cache]
        sorted = sorted.sort((a, b) => {
            return a[1].time.getTime() - b[1].time.getTime()
        }).filter((value) => {
            if (value[1].expires && value[1].expires.getTime() > sweepDate.getTime()) return false
            return true
        })

        this._cache = new Map<string, ICache<Form>>(sorted.slice(0, sorted.length - amount))

        this._lastSweptDate = new Date()
        this._client.logger.log(`${this.id} cleared ${Math.abs(ogLength - this._cache.size)} items at ${this._lastSweptDate.toLocaleTimeString("cst")}`)

        return this._cache
    }

    public clean(reason: string = "No Reason Provied", amount?: number) {
        if (amount) return this._smartSweeper(amount, reason)
        else return this._dumbSweeper(reason)
    }

    public insert(id: string, value: Form, options: CacheInsertOptions) {
        let { expires, overwrite = true, errorIfFull = false, deleteIfFull = "oldest", errorIfExists = false } = options
        const exists = typeof this._cache.get(id) !== "undefined"

        if (exists && errorIfExists == true && overwrite == false) throw new MooseCacheError(this._client, this, `The ID ${id} already exists in Cache ${this.id}`)
        if (this.isFull()) {
            if (deleteIfFull === "all") this._dumbSweeper("Automatic Sweep: Storage full")
            else if (deleteIfFull === "oldest") this._deleteOldest()
            else if (errorIfFull === true) throw new MooseCacheError(this._client, this, `Cache ${this.id} is full`)
        }

        if (typeof expires !== "undefined") expires = this._client.functions.createDate(expires)

        const cacheValue = this.generateCacheItem(value, expires)

        this._cache.set(cacheValue.id, cacheValue)
        return cacheValue.id
    }

    private _deleteOldest() {
        return this._smartSweeper(1, "Automatic Sweep: Storage full")
    }

    public sweepCache(newSize: number | "all" | { newSize?: number, all?: boolean, sweepAmount?: number } = 50, reason: string = "No Reason Provided") {

        reason = this._reasonFormatter(reason, true)

        if ((newSize as { all: boolean }).all || newSize.toString().toLowerCase() === "all") return this._dumbSweeper(reason)
        if (typeof newSize === "object") {

            newSize = newSize as { newSize?: number, sweepAmount?: number }

            if (typeof newSize.newSize === "undefined" && typeof newSize.sweepAmount === "undefined") throw new SyntaxError("Invalid Reason Type")

            return ((typeof newSize.newSize === "number") ? this._smartSweeper(Math.abs(newSize.newSize - this._cache.size), reason) : this._smartSweeper(newSize.sweepAmount, reason))

        } else if (typeof newSize === "number") {
            return this._smartSweeper(newSize, reason)
        } else throw new SyntaxError("Invalid Input Type")
    }

    private _reasonFormatter(reason: string, manual: boolean = true) { // Prety sure I speeled Formatter corect
        const strPrefix = (manual ? "Manual Sweep: " : "Automatic Sweep: ")
        if (typeof reason !== "string") throw new SyntaxError("Invalid Reason Type")
        return (reason.toLowerCase().startsWith(strPrefix.toLowerCase()) ? reason : strPrefix + reason)
    }

    public isFull() {
        return this._cache.size >= this.sizeLimit
    }

    public generateCacheItem(value: Form, expires?: Date): ICache<Form> {
        return {
            time: new Date(),
            id: ((value as any)[this.options.idProp || ""] ?? (value as any).id ?? (value as any)._id ?? this._client.functions.generateRandomString(6)) as string,
            value,
            expires
        }
    }

    public static MicroCache = MicroCache
    public MicroCache = MicroCache
}

export default MooseCache