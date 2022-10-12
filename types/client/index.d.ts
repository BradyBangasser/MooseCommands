import { Awaitable, BaseGuildEmojiManager, ChannelManager, Client, ClientApplication, ClientEvents, ClientFetchInviteOptions, ClientOptions, ClientUser, ClientVoiceManager, Collection, GuildEmoji, GuildManager, GuildPreview, GuildResolvable, GuildTemplate, If, Invite, InviteGenerationOptions, REST, ShardClientUtil, Snowflake, Sticker, StickerPack, Sweepers, UserManager, VoiceRegion, Webhook, WebSocketManager, Widget } from "discord.js";
import { DataBaseManagerOptions, MooseOptions, MooseErrorOptions, MooseRole, MessActions, MooseGuild, AutoCacheOptions } from "..";
import DataBaseManager from "./db";
import MooseChalk from "../extentions/chalk.extextions";
import MooseLogger from "../logger";
import * as functions from "../functions";
import MooseInvite from "../extentions/invite.extentions";
import MooseCache from "./cache";
import Settings from "../settings";
/**
 * @class MooseClient
 * @description Client instance for the Discord interface
 * @extends Client
 * @param {Token} token The Bot's Token
 * @param {MooseOptions} options Options for the bot
 */
declare class MooseClient<Ready extends boolean = boolean> {
    #private;
    readonly owner: string[];
    readonly testingServers: string[];
    readonly testingUsers: string[];
    readonly testing: boolean;
    readonly dbc?: DataBaseManagerOptions;
    private _connection?;
    readonly logs?: boolean;
    readonly performance: "low" | "high";
    readonly MooseEvents: string[];
    readonly chalkClass: typeof MooseChalk;
    readonly logger: MooseLogger;
    readonly errorOptions: MooseErrorOptions | boolean;
    private _caches;
    readonly commandDir: string;
    readonly featuresDir: string;
    static functions: typeof functions;
    functions: typeof functions;
    static constants: {
        speedOfSound: Number;
        regex: {
            numberStringFormat: RegExp;
            mongoURIRegex: RegExp;
        };
    };
    constants: {
        speedOfSound: Number;
        regex: {
            numberStringFormat: RegExp;
            mongoURIRegex: RegExp;
        };
    };
    private _client;
    user: If<Ready, ClientUser, null>;
    users: UserManager;
    voice: ClientVoiceManager;
    ws: WebSocketManager;
    application: If<Ready, ClientApplication, null>;
    channels: ChannelManager;
    guilds: GuildManager;
    options: ClientOptions;
    readyTimestamp: If<Ready, number, null>;
    sweepers: Sweepers;
    shard: ShardClientUtil | null;
    token: If<Ready, string, string | null>;
    rest: REST;
    static settings: Settings;
    settings: Settings;
    constructor(token: string, options?: MooseOptions);
    get emojis(): BaseGuildEmojiManager;
    get readyAt(): If<Ready, Date, null>;
    get uptime(): If<Ready, number, null>;
    destroy(): void;
    fetchGuildPreview(guild: GuildResolvable): Promise<GuildPreview>;
    fetchInvite(invite: string, options?: ClientFetchInviteOptions | undefined): Promise<Invite>;
    fetchGuildTemplate(template: string): Promise<GuildTemplate>;
    fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
    fetchSticker(id: string): Promise<Sticker>;
    fetchPremiumStickerPacks(): Promise<Collection<string, StickerPack>>;
    fetchWebhook(id: string, token?: string | undefined): Promise<Webhook>;
    fetchGuildWidget(guild: GuildResolvable): Promise<Widget>;
    generateInvite(options?: InviteGenerationOptions | undefined): string;
    login(token?: string | undefined): Promise<string>;
    isReady(): this is Client<true>;
    toJSON(): unknown;
    on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;
    on<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaitable<void>): this;
    once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;
    once<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaitable<void>): this;
    emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean;
    emit<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: unknown[]): boolean;
    off<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;
    off<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaitable<void>): this;
    removeAllListeners<K extends keyof ClientEvents>(event?: K | undefined): this;
    removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents> | undefined): this;
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(eventName: string | symbol): Function[];
    rawListeners(eventName: string | symbol): Function[];
    listenerCount(eventName: string | symbol): number;
    prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    eventNames(): (string | symbol)[];
    start(): Promise<void>;
    get db(): DataBaseManager | undefined;
    reportCache(cache: MooseCache): boolean;
    get caches(): Map<string, MooseCache<any>>;
    get usedCacheIds(): IterableIterator<string>;
    generateCacheId(group?: string): string;
    getCache(id: string): MooseCache<any> | undefined;
    createCache(group?: string): void;
    private _formatDir;
    fetchGuild(id: Snowflake | MooseGuild | GuildEmoji | MooseRole | MooseInvite | MessActions): Promise<MooseGuild | undefined>;
    autoCache(funct: Function, options?: AutoCacheOptions): void;
}
export default MooseClient;
