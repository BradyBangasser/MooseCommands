import { Awaitable, BaseGuildEmojiManager, ChannelManager, Client, ClientApplication, ClientEvents, ClientFetchInviteOptions, ClientOptions, ClientUser, ClientVoiceManager, Collection, CommandInteraction, Emoji, GuildEmoji, GuildManager, GuildPreview, GuildResolvable, GuildTemplate, If, Invite, InviteGenerationOptions, REST, Role, ShardClientUtil, Snowflake, Sticker, StickerPack, Sweepers, UserManager, VoiceRegion, Webhook, WebSocketManager, Widget } from "discord.js";
import { MooseEvents, DataBaseManagerOptions, MooseOptions, MooseErrorOptions, MooseRole, MessActions, MooseGuild, AutoCacheOptions } from "..";
import DataBaseManager from "./db";
import MooseChalk from "../extentions/chalk.extextions";
import MooseLogger from "../logger";
import * as functions from "../functions";
import { PathLike } from "fs";
import MooseInvite from "../extentions/invite.extentions";
import MooseCache from "./cache";
import { MooseCacheError } from "../extentions/error.extentions";
import Settings from "../settings";


/**
 * @class MooseClient
 * @description Client instance for the Discord interface
 * @extends Client
 * @param {Token} token The Bot's Token
 * @param {MooseOptions} options Options for the bot
 */

class MooseClient<Ready extends boolean = boolean> {

    #botToken: string
    readonly owner: string[]
    readonly testingServers: string[]
    readonly testingUsers: string[]
    readonly testing: boolean
    readonly dbc?: DataBaseManagerOptions
    private _connection?: DataBaseManager
    readonly logs?: boolean
    readonly performance: "low" | "high"
    readonly MooseEvents: string[] = ["Mooseerror"]
    readonly chalkClass = MooseChalk
    readonly logger: MooseLogger
    readonly errorOptions: MooseErrorOptions | boolean
    private _caches = new Map<string, MooseCache>()
    readonly commandDir: string
    readonly featuresDir: string
    public static functions: typeof functions = functions
    public functions: typeof functions = functions
    public static constants = Settings.constants
    public constants = Settings.constants
    private _client: Client
    public user!: If<Ready, ClientUser, null>;
    public users: UserManager;
    public voice: ClientVoiceManager;
    public ws: WebSocketManager;
    public application!: If<Ready, ClientApplication, null>;
    public channels: ChannelManager;
    public guilds: GuildManager;
    public options: ClientOptions;
    public readyTimestamp!: If<Ready, number, null>;
    public sweepers: Sweepers;
    public shard: ShardClientUtil | null;
    public token!: If<Ready, string, string | null>;
    public rest: REST;
    public static settings = new Settings()
    public settings = new Settings()

    constructor(token: string, options?: MooseOptions) {

        options = options ?? {}

        const {
            testing = false,
            testingServers = [],
            testingUsers = [],
            owner = [],
            intents = ["MessageContent", "Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "GuildScheduledEvents"],
            shards = "auto",
            shardCount,
            closeTimeout,
            makeCache,
            allowedMentions,
            partials,
            failIfNotExists,
            presence = {},
            waitGuildTimeout,
            sweepers,
            ws,
            rest,
            jsonTransformer,
            db = false,
            testingLogs = false,
            performance = "low",
            errors = true,
            commandDir = "commands",
            featuresDir = "features"
        } = options

        // super({ intents, shards, shardCount, closeTimeout, makeCache, allowedMentions, partials, failIfNotExists, presence, waitGuildTimeout, sweepers, ws, rest, jsonTransformer })
        this.#botToken = token
        this.owner = this.functions.Arrayify(owner)
        this.testing = (typeof testing === "boolean") ? testing : false
        this.testingServers = this.functions.Arrayify(testingServers)
        this.testingUsers = this.functions.Arrayify(testingUsers)
        this.dbc = db || undefined
        this.logs = testingLogs
        this.performance = performance
        this.logger = new MooseLogger(this, {})
        this.errorOptions = errors
        this.commandDir = this._formatDir(commandDir)
        this.featuresDir = this._formatDir(featuresDir)
        this._client = new Client<Ready>(options as any)
        this.channels = this._client.channels
        this.guilds = this._client.guilds
        this.options = this._client.options
        this.sweepers = this._client.sweepers
        this.shard = this._client.shard
        this.rest = this._client.rest
        this.users = this._client.users
        this.voice = this._client.voice
        this.ws = this._client.ws
    }

    public get emojis(): BaseGuildEmojiManager {
        throw new Error("Method not implemented.");
    }

    public get readyAt(): If<Ready, Date, null> {
        throw new Error("Method not implemented.");
    }

    public get uptime(): If<Ready, number, null> {
        throw new Error("Method not implemented.");
    }

    public destroy(): void {
        throw new Error("Method not implemented.");
    }
    public fetchGuildPreview(guild: GuildResolvable): Promise<GuildPreview> {
        throw new Error("Method not implemented.");
    }
    public fetchInvite(invite: string, options?: ClientFetchInviteOptions | undefined): Promise<Invite> {
        throw new Error("Method not implemented.");
    }
    public fetchGuildTemplate(template: string): Promise<GuildTemplate> {
        throw new Error("Method not implemented.");
    }
    public fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>> {
        throw new Error("Method not implemented.");
    }
    public fetchSticker(id: string): Promise<Sticker> {
        throw new Error("Method not implemented.");
    }
    public fetchPremiumStickerPacks(): Promise<Collection<string, StickerPack>> {
        throw new Error("Method not implemented.");
    }
    public fetchWebhook(id: string, token?: string | undefined): Promise<Webhook> {
        throw new Error("Method not implemented.");
    }
    public fetchGuildWidget(guild: GuildResolvable): Promise<Widget> {
        throw new Error("Method not implemented.");
    }
    public generateInvite(options?: InviteGenerationOptions | undefined): string {
        throw new Error("Method not implemented.");
    }
    public login(token?: string | undefined): Promise<string> {
        throw new Error("Method not implemented.");
    }
    public isReady(): this is Client<true> {
        throw new Error("Method not implemented.");
    }
    public toJSON(): unknown {
        throw new Error("Method not implemented.");
    }
    public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;
    public on<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaitable<void>): this;
    public on(event: unknown, listener: unknown): this {
        throw new Error("Method not implemented.");
    }
    public once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;
    public once<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaitable<void>): this;
    public once(event: unknown, listener: unknown): this {
        throw new Error("Method not implemented.");
    }
    public emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean;
    public emit<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: unknown[]): boolean;
    public emit(event: unknown, ...args: unknown[]): boolean {
        throw new Error("Method not implemented.");
    }
    public off<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;
    public off<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaitable<void>): this;
    public off(event: unknown, listener: unknown): this {
        throw new Error("Method not implemented.");
    }
    public removeAllListeners<K extends keyof ClientEvents>(event?: K | undefined): this;
    public removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents> | undefined): this;
    public removeAllListeners(event?: unknown): this {
        throw new Error("Method not implemented.");
    }
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    setMaxListeners(n: number): this {
        throw new Error("Method not implemented.");
    }
    getMaxListeners(): number {
        throw new Error("Method not implemented.");
    }
    listeners(eventName: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    rawListeners(eventName: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    listenerCount(eventName: string | symbol): number {
        throw new Error("Method not implemented.");
    }
    prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    eventNames(): (string | symbol)[] {
        throw new Error("Method not implemented.");
    }

    public async start() {
        if (this.dbc) this._connection = await new DataBaseManager(this, this.dbc).setup()

        this.on("ready", () => {

        })

        try {
            await this.login(this.#botToken)
        } catch (error) {
            this.emit("MooseError", error)
        }
    }

    public get db() {
        if (this._connection) return this._connection
        return undefined
    }

    public reportCache(cache: MooseCache) {
        if (!(cache instanceof MooseCache)) throw new SyntaxError("Cache is not a valid cache")
        if (typeof this._caches.get(cache.id) !== "undefined") return false

        this._caches.set(cache.id, cache)
        return true
    }

    public get caches() {
        return this._caches
    }

    public get usedCacheIds() {
        return this._caches.keys()
    }

    public generateCacheId(group?: string): string {
        const id = `cache${`-${this.functions.capitalize(String(group))}` || ""}-${this.functions.generateRandomString(6)}`
        if (typeof this._caches.get(id) === "undefined") return this.generateCacheId(group)
        return id
    }

    public getCache(id: string) {
        return this._caches.get(id)
    }

    public createCache(group?: string) {
        const newCache = new MooseCache(this, { group })

        if (typeof group === "string" && this.caches.get(group)) {

        }
    }

    private _formatDir(dir: string | PathLike) {
        const splitDir = dir.toString().replace(process.cwd(), "").replace(/\\/g, "/").split("/")
        return splitDir[splitDir.length - 1]
    }

    public async fetchGuild(id: Snowflake | MooseGuild | GuildEmoji | MooseRole | MooseInvite | MessActions): Promise<MooseGuild | undefined> {
        if (typeof id === "string") return new MooseGuild(this, await this.guilds.fetch(id))
        if (id instanceof MooseGuild) return id
        if ((id as MooseRole)) {
            return undefined
        }
        return undefined
    }

    public autoCache(funct: Function, options: AutoCacheOptions = {}) {

    }
}

export default MooseClient