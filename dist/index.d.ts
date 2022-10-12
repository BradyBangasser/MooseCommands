import * as discord_js from 'discord.js';
import { If, ClientUser, UserManager, ClientVoiceManager, WebSocketManager, ClientApplication, ChannelManager, GuildManager, ClientOptions, Sweepers, ShardClientUtil, REST, BaseGuildEmojiManager, GuildResolvable, GuildPreview, ClientFetchInviteOptions, Invite, GuildTemplate, Collection, VoiceRegion, Sticker, StickerPack, Webhook, Widget, InviteGenerationOptions, Client, ClientEvents, Awaitable, Snowflake, GuildEmoji, GuildBanManager, GuildChannelManager, GuildApplicationCommandManager, GuildDefaultMessageNotifications, GuildEmojiManager, GuildExplicitContentFilter, GuildInviteManager, GuildMemberManager, GuildMFALevel, Locale, GuildPremiumTier, PresenceManager, RoleManager, GuildScheduledEventManager, StageInstanceManager, GuildStickerManager, SystemChannelFlagsBitField, VoiceStateManager, Guild, ImageURLOptions, GuildEditData, WelcomeScreenEditData, WelcomeScreen, GuildAuditLogsResolvable, GuildAuditLogsFetchOptions, GuildAuditLogs, Integration, BaseFetchOptions, GuildMember, Vanity, GuildWidgetSettings, VoiceChannelResolvable, BufferResolvable, Base64Resolvable, GuildMemberResolvable, TextChannelResolvable, SystemChannelFlagsResolvable, GuildVerificationLevel, GuildWidgetSettingsData, VoiceChannel, InternalDiscordGatewayAdapterCreator, TextChannel, WebSocketShard, MessageActivity, Attachment, User, ActionRow, MessageActionRowComponent, Embed, MessageInteraction, MessageMentions, ReactionManager, MessageType, InteractionType, MessageFlagsBitField, Message, CommandInteraction, StartThreadOptions, AnyThreadChannel, MessagePayload, BaseMessageOptions, InteractionReplyOptions, EmojiIdentifierResolvable, MessageReaction, MessageEditOptions, MessageComponentType, MessageCollectorOptionsParams, MappedInteractionTypes, ReactionCollectorOptions, ReactionCollector, AwaitReactionsOptions, AwaitMessageCollectorOptionsParams, TextBasedChannel, MessageReference, LocalizationMap, RESTPostAPIApplicationCommandsJSONBody, Channel, MessageManager, ThreadAutoArchiveDuration, PermissionOverwriteManager, AllowedThreadTypeForTextChannel, ChannelType as ChannelType$1, DMChannel, PartialGroupDMChannel, NewsChannel, AwaitMessagesOptions, MessageResolvable, GuildChannelCloneOptions, CreateInviteOptions, MessageCollectorOptions, WebhookCreateOptions, CategoryChannelResolvable, SetParentOptions, SetChannelPositionOptions, EmbedBuilder, AttachmentBuilder, SlashCommandBuilder, SlashCommandBooleanOption, SlashCommandStringOption, SlashCommandIntegerOption, SlashCommandChannelOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandRoleOption, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder, SlashCommandUserOption, CacheFactory, MessageMentionOptions, Partials, PresenceData, SweeperOptions, WebSocketOptions, RESTOptions, LocaleString } from 'discord.js';
import mongoose from 'mongoose';
import figlet from 'figlet';
import { PathLike } from 'fs';
import { Chalk, ColorSupportLevel, Color, Modifiers } from 'chalk';
import { setTimeout } from 'node:timers/promises';

declare class DataBaseManager {
    private _client;
    readonly mongoURI: string;
    readonly options: DataBaseManagerOptions;
    private _connection?;
    private _models;
    constructor(client: MooseClient, options: DataBaseManagerOptions | string);
    setup(): Promise<this>;
    private _getSchemas;
    get connection(): typeof mongoose | undefined;
    get models(): {
        [key: string]: mongoose.Model<any, {}, {}, {}, any>;
    };
    private _registerModel;
    getModel(modelName: string): mongoose.Model<any> | null | undefined;
    private _dbInit;
}

declare class DisCrackChalk extends Chalk {
    [key: string]: any;
    constructor(level?: ColorSupportLevel);
}

declare class MooseLogger {
    private _options;
    private _client;
    constructor(client: MooseClient, options: MooseLoggerOptions);
    log(text: string, priority?: Priority, style?: MooseLoggerStyles): string | void;
    private _res;
    chalkIt(text: string, { color, modifiers, hex, rgb }: {
        color?: Color;
        modifiers?: Modifiers | Modifiers[];
        hex?: string;
        rgb?: [number, number, number] | RGBColorObject;
    }): string;
}

/**
 * Clean up a Path string for import use
 * @param {string | PathLike} dirpath Path to Sanitize
 * @param {boolean} removeCWD Remove the CWD from path
 * @returns {string} Path String
 */
declare function sanitizePath(dirpath: string | PathLike, removeCWD?: boolean): string;
/**
 * Gets all files from a specified path or from the cwd
 * @param {string | PathLike} dirpath The Path to the directory
 * @returns {[string, string][]} [File Path, File Name][]
 */
declare function getFiles(dirpath?: string | PathLike): [string, string][];
/**
 * Gets a file by it's name
 * @param {string} name Name of file
 * @returns [File Path, File Name]
 */
declare function getFileByName(name: string): [string, string][];
/**
 * Gets files by extention
 * @param {string} extention Extention  of file
 * @returns [File Path, File Name][]
 */
declare function getFilesByExtention(extention: string): [string, string][];
/**
 * Turns an Object into an Array of objects, separting each key
 * @param {{[key: string]: any}} object An object to Arrayify
 * @param {string} key Optional argument for a key that replaces the one in the object
 * @returns {object[]} An Array of Objects
 */
declare function Arrayify(object: {
    [key: string]: any;
} | string | string[], key?: string): any[];
/**
 * Generates a random string
 * @param {RanStringOptions | number} length The length of the string or RanStringOptions object
 * @returns {string} string
 */
declare function generateRandomString(length?: RanStringOptions | number): string;
/**
 * Capitalizes a string
 * @param {string} str string
 * @returns {string} string
 */
declare function capitalize(str: string): string;
/**
 * Converts array of string to camel case string
 * @param {string[]} str string[]
 * @returns {string} string
 */
declare function convertToCamelCase(str: string[]): string;
/**
 * Removes dups from array
 * @param {any[]} array Array
 * @returns {any[]} Array
 */
declare function removeDups(array: any[]): any[];
/**
 * Check if you can create an instance of an object with the new keyword
 * @param {any} object Object
 * @returns boolean
 */
declare function isNewable(object: any): boolean;
/**
 * Converts a TimeString to a normal JS Date
 * @param {TimeString} timeString TimeString
 * @return {Date} Date
 */
declare function createDate(timeString: TimeString | number | Date): Date;

declare const functions_sanitizePath: typeof sanitizePath;
declare const functions_getFiles: typeof getFiles;
declare const functions_getFileByName: typeof getFileByName;
declare const functions_getFilesByExtention: typeof getFilesByExtention;
declare const functions_Arrayify: typeof Arrayify;
declare const functions_generateRandomString: typeof generateRandomString;
declare const functions_capitalize: typeof capitalize;
declare const functions_convertToCamelCase: typeof convertToCamelCase;
declare const functions_removeDups: typeof removeDups;
declare const functions_isNewable: typeof isNewable;
declare const functions_createDate: typeof createDate;
declare namespace functions {
  export {
    setTimeout as wait,
    functions_sanitizePath as sanitizePath,
    functions_getFiles as getFiles,
    functions_getFileByName as getFileByName,
    functions_getFilesByExtention as getFilesByExtention,
    functions_Arrayify as Arrayify,
    functions_generateRandomString as generateRandomString,
    functions_capitalize as capitalize,
    functions_convertToCamelCase as convertToCamelCase,
    functions_removeDups as removeDups,
    functions_isNewable as isNewable,
    functions_createDate as createDate,
  };
}

declare class MeeseInvite {
}

declare class MicroCache<K extends string, V> extends Map<K, ICache<V>> {
    private _cache;
    constructor(entries?: readonly [K, V]);
    // @ts-ignore
    set(key: K, value: V, expiration?: Date): this;
    // @ts-ignore
    get(key: K): V | undefined;
    // @ts-ignore
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void): void;
    strictForEach(callbackfn: (value: ICache<V>, key: K, map: Map<K, ICache<V>>) => void): void;
    cacheResults<T = any>(name: string, callbackfn: (...args: any[]) => any, { args, expires, resultsDependOnArgs, capsSensitiveArgs }: MicroCacheCacheResultOptions): T;
    private _formatArgs;
}

declare class MooseCache$1<Form = any> {
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

declare class Settings {
    static noReason: string;
    static noDescription: string;
    static errors: {
        defaultSettings: {
            errorSystem: boolean;
            handleDefault: boolean;
            handleMoose: boolean;
            emitOnError: boolean;
            emitOnMooseError: boolean;
            emitOnDiscordError: boolean;
            keepBotRunning: boolean;
            errorHandling: string;
            shardErrorHandling: string;
            customErrors: never[];
            log: string;
        };
        disabled: {
            errorSystem: boolean;
        };
    };
    errors: {
        defaultSettings: {
            errorSystem: boolean;
            handleDefault: boolean;
            handleMoose: boolean;
            emitOnError: boolean;
            emitOnMooseError: boolean;
            emitOnDiscordError: boolean;
            keepBotRunning: boolean;
            errorHandling: string;
            shardErrorHandling: string;
            customErrors: never[];
            log: string;
        };
        disabled: {
            errorSystem: boolean;
        };
    };
    static characters: {
        special: string;
        lower: string;
        upper: string;
        number: string;
    };
    characters: {
        special: string;
        lower: string;
        upper: string;
        number: string;
    };
    static regex: {
        commandReplacer: RegExp;
    };
    regex: {
        commandReplacer: RegExp;
    };
    static command: {
        defaultEphemeral: boolean;
        dmOnlyDefault: boolean;
        defaultHidden: boolean;
        defaultOwnerOnly: boolean;
        defaultGuarded: boolean;
        defaultChannelOnly: boolean;
        defaultArgStyle: string;
        argStyleArray: readonly ["string", "single", "multiple", "array", "list"];
        defaultCacheResult: boolean;
        defaultNSFW: boolean;
        defaultNSFWOnly: boolean;
        defaultRest: boolean;
        defaultAdminOnly: boolean;
        defaultModOnly: boolean;
        defaultAllowExtraArgs: boolean;
        defaultInteractions: boolean;
        defaultArgSplitter: string;
        defaultLastRunBy: number;
        defaultAutoAlias: boolean;
        defaultCapsSensitive: boolean;
        defaultTestOnly: boolean;
        defaultSlash: boolean;
        defaultCommandOptions: {
            description: string;
            options: CommandSubOptions[];
        };
        defaultCommndSubOption: CommandSubOptions;
    };
    command: {
        defaultEphemeral: boolean;
        dmOnlyDefault: boolean;
        defaultHidden: boolean;
        defaultOwnerOnly: boolean;
        defaultGuarded: boolean;
        defaultChannelOnly: boolean;
        defaultArgStyle: string;
        argStyleArray: readonly ["string", "single", "multiple", "array", "list"];
        defaultCacheResult: boolean;
        defaultNSFW: boolean;
        defaultNSFWOnly: boolean;
        defaultRest: boolean;
        defaultAdminOnly: boolean;
        defaultModOnly: boolean;
        defaultAllowExtraArgs: boolean;
        defaultInteractions: boolean;
        defaultArgSplitter: string;
        defaultLastRunBy: number;
        defaultAutoAlias: boolean;
        defaultCapsSensitive: boolean;
        defaultTestOnly: boolean;
        defaultSlash: boolean;
        defaultCommandOptions: {
            description: string;
            options: CommandSubOptions[];
        };
        defaultCommndSubOption: CommandSubOptions;
    };
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
    static physics: {
        defaultGravityConstant: number;
        speed: (distance: number, time: number) => number;
        distance: (speed: number, time: number) => number;
        time: (distance: number, speed: number) => number;
        forceOfGravity: (unit?: number) => void;
        aeronautics: {
            calculateWingLoading: (weight: number, wingArea: number) => number;
            calculateLiftCoefficent: typeof calculateLiftCoefficent;
            calculateLiftForce: (liftCoefficent: number, fluidDensity: number, fluidVelocity: number, area: number) => number;
        };
    };
}
declare function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, fluidDynamicPressure: number): number;
declare function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, fluidDensity: number, fluidVelocity: number): number;

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
    readonly chalkClass: typeof DisCrackChalk;
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
    reportCache(cache: MooseCache$1): boolean;
    get caches(): Map<string, MooseCache$1<any>>;
    get usedCacheIds(): IterableIterator<string>;
    generateCacheId(group?: string): string;
    getCache(id: string): MooseCache$1<any> | undefined;
    createCache(group?: string): void;
    private _formatDir;
    fetchGuild(id: Snowflake | MooseGuild | GuildEmoji | MooseRole | MeeseInvite | MessActions): Promise<MooseGuild | undefined>;
    autoCache(funct: Function, options?: AutoCacheOptions): void;
}

declare class MooseGuild {
    private client;
    private discordGuild;
    afkChannelId: Snowflake | null;
    afkTimeout: number;
    applicationId: Snowflake | null;
    approximateMemberCount: number | null;
    approximatePresenceCount: number | null;
    available: boolean;
    bans: GuildBanManager;
    channels: GuildChannelManager;
    commands: GuildApplicationCommandManager;
    defaultMessageNotifications: GuildDefaultMessageNotifications;
    discoverySplash: string | null;
    emojis: GuildEmojiManager;
    explicitContentFilter: GuildExplicitContentFilter;
    invites: GuildInviteManager;
    joinedTimestamp: number;
    large: boolean;
    maximumMembers: number | null;
    maximumPresences: number | null;
    memberCount: number;
    members: GuildMemberManager;
    mfaLevel: GuildMFALevel;
    ownerId: Snowflake;
    preferredLocale: Locale;
    premiumProgressBarEnabled: boolean;
    premiumTier: GuildPremiumTier;
    presences: PresenceManager;
    publicUpdatesChannelId: Snowflake | null;
    roles: RoleManager;
    rulesChannelId: Snowflake | null;
    scheduledEvents: GuildScheduledEventManager;
    shardId: number;
    stageInstances: StageInstanceManager;
    stickers: GuildStickerManager;
    systemChannelFlags: Readonly<SystemChannelFlagsBitField>;
    systemChannelId: Snowflake | null;
    vanityURLUses: number | null;
    voiceStates: VoiceStateManager;
    widgetChannelId: Snowflake | null;
    widgetEnabled: boolean | null;
    createTemplate: (name: string, description?: string) => Promise<GuildTemplate>;
    delete: () => Promise<Guild>;
    discoverySplashURL: (options?: ImageURLOptions) => string | null;
    edit: (data: GuildEditData) => Promise<Guild>;
    editWelcomeScreen: (data: WelcomeScreenEditData) => Promise<WelcomeScreen>;
    equals: (guild: Guild) => boolean;
    fetchAuditLogs: <T extends GuildAuditLogsResolvable = null>(options?: GuildAuditLogsFetchOptions<T>) => Promise<GuildAuditLogs<T>>;
    fetchIntegrations: () => Promise<Collection<Snowflake | string, Integration>>;
    fetchOwner: (options?: BaseFetchOptions) => Promise<GuildMember>;
    fetchPreview: () => Promise<GuildPreview>;
    fetchTemplates: () => Promise<Collection<GuildTemplate['code'], GuildTemplate>>;
    fetchVanityData: () => Promise<Vanity>;
    fetchWebhooks: () => Promise<Collection<Snowflake, Webhook>>;
    fetchWelcomeScreen: () => Promise<WelcomeScreen>;
    fetchWidget: () => Promise<Widget>;
    fetchWidgetSettings: () => Promise<GuildWidgetSettings>;
    leave: () => Promise<Guild>;
    setAFKChannel: (afkChannel: VoiceChannelResolvable | null, reason?: string) => Promise<Guild>;
    setAFKTimeout: (afkTimeout: number, reason?: string) => Promise<Guild>;
    setBanner: (banner: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    setDefaultMessageNotifications: (defaultMessageNotifications: GuildDefaultMessageNotifications | null, reason?: string) => Promise<Guild>;
    setDiscoverySplash: (discoverySplash: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    setExplicitContentFilter: (explicitContentFilter: GuildExplicitContentFilter | null, reason?: string) => Promise<Guild>;
    setIcon: (icon: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    setName: (name: string, reason?: string) => Promise<Guild>;
    setOwner: (owner: GuildMemberResolvable, reason?: string) => Promise<Guild>;
    setPreferredLocale: (preferredLocale: Locale | null, reason?: string) => Promise<Guild>;
    setPublicUpdatesChannel: (publicUpdatesChannel: TextChannelResolvable | null, reason?: string) => Promise<Guild>;
    setRulesChannel: (rulesChannel: TextChannelResolvable | null, reason?: string) => Promise<Guild>;
    setSplash: (splash: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    setSystemChannel: (systemChannel: TextChannelResolvable | null, reason?: string) => Promise<Guild>;
    setSystemChannelFlags: (systemChannelFlags: SystemChannelFlagsResolvable, reason?: string) => Promise<Guild>;
    setVerificationLevel: (verificationLevel: GuildVerificationLevel | null, reason?: string) => Promise<Guild>;
    setPremiumProgressBarEnabled: (enabled?: boolean, reason?: string) => Promise<Guild>;
    setWidgetSettings: (settings: GuildWidgetSettingsData, reason?: string) => Promise<Guild>;
    setMFALevel: (level: GuildMFALevel, reason?: string) => Promise<Guild>;
    toJSON: () => unknown;
    id: string;
    constructor(client: MooseClient, guild: Guild);
    get afkChannel(): VoiceChannel | null;
    get maximumBitrate(): number;
    get widgetChannel(): typeof this.discordGuild.widgetChannel | null;
    get joinedAt(): Date;
    get voiceAdapterCreator(): InternalDiscordGatewayAdapterCreator;
    get systemChannel(): TextChannel | null;
    get shard(): WebSocketShard;
    get rulesChannel(): TextChannel | null;
    get publicUpdatesChannel(): TextChannel | null;
    get serverStats(): {};
}

declare class MessActions {
    private _message;
    private _client;
    inputType: "interaction" | "message";
    activity: MessageActivity | null;
    applicationId: Snowflake | null;
    attachments: Collection<Snowflake, Attachment>;
    author: User;
    channelId: Snowflake;
    components: ActionRow<MessageActionRowComponent>[];
    content: string;
    createdTimestamp: number;
    editedTimestamp: number | null;
    embeds: Embed[];
    groupActivityApplication: ClientApplication | null;
    guildId: If<boolean, Snowflake>;
    id: Snowflake;
    interaction: MessageInteraction | null;
    mentions: MessageMentions;
    nonce: string | number | null;
    pinned: boolean;
    reactions: ReactionManager;
    stickers: Collection<Snowflake, Sticker>;
    system: boolean;
    tts: boolean;
    type: MessageType | InteractionType.ApplicationCommand;
    webhookId: Snowflake | null;
    flags: Readonly<MessageFlagsBitField>;
    inGuild: boolean;
    /**
     * A combination and extention of discord.js's Message and CommandInteraction
     * @param {Message | CommandInteraction} message discord.js Objects
     * @param {DisCrackClient} client DisCrack's Client
     */
    constructor(message: Message | CommandInteraction, client: MooseClient);
    private checkMentions;
    unpin(reason?: string): false | Promise<Message<boolean>>;
    toString(): string;
    toJSON(): void;
    suppressEmbeds(suppress?: boolean): false | Promise<Message<boolean>>;
    startThread(options: StartThreadOptions): false | Promise<AnyThreadChannel<boolean>>;
    resolveComponent(customId: string): false | MessageActionRowComponent | null;
    reply(options: string | MessagePayload | BaseMessageOptions | InteractionReplyOptions): false | Promise<Message<boolean>> | Promise<discord_js.InteractionResponse<boolean>>;
    removeAttachments(): false | Promise<Message<boolean>>;
    react(emoji: EmojiIdentifierResolvable): false | Promise<MessageReaction>;
    pin(reason?: string): false | Promise<Message<boolean>>;
    fetch(force?: boolean): false | Message<boolean> | CommandInteraction<discord_js.CacheType> | Promise<Message<boolean>>;
    crosspost(): false | Promise<Message<boolean>>;
    fetchWebhook(): false | Promise<discord_js.Webhook> | discord_js.InteractionWebhook;
    fetchReference(): false | Promise<Message<boolean>>;
    equals(message: Message, rawData: unknown): boolean;
    edit(content: string | MessageEditOptions | MessagePayload): false | Promise<Message<boolean>>;
    delete(): false | Promise<Message<boolean>>;
    createMessageComponentCollector<T extends MessageComponentType>(options?: MessageCollectorOptionsParams<T>): false | discord_js.InteractionCollector<MappedInteractionTypes<boolean>[T]>;
    createReactionCollector(options?: ReactionCollectorOptions): false | ReactionCollector;
    awaitReactions(options?: AwaitReactionsOptions): false | Promise<Collection<string, MessageReaction>>;
    awaitMessageComponent<T extends MessageComponentType>(options?: AwaitMessageCollectorOptionsParams<T>): false | Promise<MappedInteractionTypes<boolean>[T]>;
    get url(): string | undefined;
    get thread(): AnyThreadChannel<boolean> | null | undefined;
    get partial(): false | undefined;
    get pinnable(): boolean;
    get member(): GuildMember | discord_js.APIInteractionGuildMember | null;
    get guild(): Guild | null;
    get hasThread(): boolean;
    get crosspostable(): boolean;
    get deletable(): boolean;
    get editable(): boolean;
    get editedAt(): Date;
    get createdAt(): Date;
    get cleanContent(): string | undefined;
    get channel(): TextBasedChannel | null;
    get reference(): MessageReference | null;
}

declare class MooseError extends Error {
    readonly client: MooseClient;
    constructor(client: MooseClient, error: string);
}

declare abstract class CommandBase implements CommandOptions {
    protected client: MooseClient;
    readonly name: string;
    readonly description: string;
    readonly aliases: string[];
    readonly ephemeral: boolean;
    readonly privateCommand: boolean;
    readonly nsfw: boolean;
    readonly dm: boolean;
    readonly dmOnly: boolean;
    readonly dft: boolean;
    readonly unknown: boolean;
    readonly hidden: boolean;
    readonly ownerOnly: boolean;
    readonly regex?: RegExp[];
    readonly guarded: boolean;
    readonly channel: boolean;
    readonly channelOnly: boolean;
    readonly argStyle: typeof Settings.command.argStyleArray[number];
    readonly cacheResults: boolean;
    readonly schema: mongoose.Schema | mongoose.Schema[];
    readonly maxArgs?: number;
    readonly minArgs: number;
    readonly rest: boolean;
    readonly namedArgs?: NamedArgs;
    readonly adminOnly: boolean;
    readonly modOnly: boolean;
    private _whiteListedRoles;
    private _blacklistedRoles;
    private _blacklistedUsers;
    private _whitelistedUsers;
    private _blacklistedGuilds;
    private _whitelistedGuilds;
    private _blacklistedChannels;
    private _whitelistedChannels;
    readonly serverTimeLimit?: number;
    readonly userTimeLimit?: number;
    readonly allowExtraArgs: boolean;
    readonly interaction: boolean;
    readonly argSplitter: string | ((args: string) => string);
    readonly args: Arg[];
    readonly lastRunBy: number;
    readonly autoaliases: boolean;
    private _apiFormat;
    readonly nsfwOnly: boolean;
    readonly capsSensitive: boolean;
    readonly testOnly: boolean;
    readonly slash: boolean;
    readonly slashCommand: boolean;
    readonly nameLocalizations?: LocalizationMap;
    readonly slashFunction?: SlashBuilderFunction;
    private _cache;
    constructor(options: CommandOptions);
    run(args: CommandRunArgs): Promise<void>;
    interactionRun(args: CommandRunArgs): Promise<void>;
    private _verifyArgStyle;
    get blacklistedChannels(): MooseChannel | PathLike | ChannelType | MooseChannel[] | ChannelType[];
    get whitelistedChannels(): MooseChannel | PathLike | ChannelType | MooseChannel[] | ChannelType[];
    get blacklistedGuilds(): string[] | PathLike | MooseGuild | MooseGuild[];
    get whitelistedGuilds(): string[] | PathLike | MooseGuild | MooseGuild[];
    get blacklistedRoles(): string[] | PathLike | MooseRole | MooseRole[];
    get blacklistedUsers(): string[] | PathLike | MooseUser | MooseUser[];
    get whitelistedUsers(): string[] | PathLike | MooseUser | MooseUser[];
    get whiteListedRoles(): string[] | PathLike | MooseRole | MooseRole[];
    get getApiCommandFormat(): RESTPostAPIApplicationCommandsJSONBody;
    initCommand(client: MooseClient): true | void;
    private _autoAlias;
    private _createSlashData;
    get slashData(): void;
    private _createFormatClasses;
    protected cacheManager(): void;
}

declare class MooseChannel {
    readonly channel: Channel;
    readonly client: MooseClient;
    readonly guild?: MooseGuild;
    readonly guildId?: string;
    readonly createdAt: Date | null;
    readonly createdTimestamp: number | null;
    readonly id: Snowflake;
    readonly partial: boolean;
    readonly url: string;
    private _cache;
    constructor(client: MooseClient, channel: Channel);
    get deleteable(): boolean | undefined;
    get flags(): any;
    get lastMessage(): Message<boolean> | null;
    get lastMessageId(): string | null;
    get lastPinAt(): Date | null;
    get lastPinTimestamp(): number | null;
    get manageable(): boolean;
    get members(): Collection<string, discord_js.GuildMember>;
    get messages(): MessageManager | undefined;
    get name(): string | undefined;
    get nsfw(): boolean | undefined;
    get defaultAutoArchiveDuration(): ThreadAutoArchiveDuration | undefined;
    get permissionsOverwrite(): PermissionOverwriteManager | undefined;
    get permissionsLocked(): boolean | null | undefined;
    get position(): number | undefined;
    get rateLimitPerUser(): number | undefined;
    get rawPosition(): number;
    get threads(): discord_js.GuildTextThreadManager<AllowedThreadTypeForTextChannel>;
    get topic(): string | null;
    get type(): ChannelType$1.GuildText | ChannelType$1.DM | ChannelType$1.GuildVoice | ChannelType$1.GroupDM | ChannelType$1.GuildCategory | ChannelType$1.GuildAnnouncement | ChannelType$1.AnnouncementThread | ChannelType$1.PublicThread | ChannelType$1.PrivateThread | ChannelType$1.GuildStageVoice | ChannelType$1.GuildForum;
    get viewable(): boolean;
    delete(reason?: string): Promise<discord_js.CategoryChannel | DMChannel | PartialGroupDMChannel | NewsChannel | discord_js.StageChannel | TextChannel | discord_js.PrivateThreadChannel | discord_js.PublicThreadChannel<boolean> | discord_js.VoiceChannel | discord_js.ForumChannel>;
    fetch(force: boolean): Promise<discord_js.CategoryChannel | DMChannel | PartialGroupDMChannel | NewsChannel | discord_js.StageChannel | TextChannel | discord_js.PrivateThreadChannel | discord_js.PublicThreadChannel<boolean> | discord_js.VoiceChannel | discord_js.ForumChannel>;
    isDMBased(): boolean;
    isTextBased(): boolean;
    isThread(): boolean;
    isVoiceBased(): boolean;
    awaitMessageComponent<T extends MessageComponentType>(options?: AwaitMessageCollectorOptionsParams<T, true>): Promise<discord_js.MappedInteractionTypes<boolean>[T] | undefined>;
    awaitMessages(options?: AwaitMessagesOptions): Promise<Collection<string, Message<boolean>> | undefined>;
    bulkDelete(messages: number | Collection<Snowflake, Message> | Array<MessageResolvable>, filterOld?: boolean): Promise<Collection<Snowflake, Message | undefined>>;
    clone(options?: GuildChannelCloneOptions): Promise<TextChannel | undefined>;
    createInvite(options?: CreateInviteOptions): Promise<discord_js.Invite | undefined>;
    createMessageCollector(options?: MessageCollectorOptions): discord_js.MessageCollector | undefined;
    createMessageComponentCollector<T extends MessageComponentType>(options?: MessageCollectorOptionsParams<T, true>): discord_js.InteractionCollector<discord_js.MappedInteractionTypes<boolean>[(T & discord_js.ComponentType.ActionRow) | (T & discord_js.ComponentType.Button) | (T & discord_js.ComponentType.SelectMenu) | (T & discord_js.ComponentType.TextInput)]> | undefined;
    createWebhook(options: WebhookCreateOptions): Promise<discord_js.Webhook | undefined>;
    fetchInvites(cache?: boolean): Promise<Collection<string, discord_js.Invite> | undefined>;
    fetchWebhooks(): Promise<Collection<string, discord_js.Webhook> | undefined>;
    send(options: string | MessagePayload | BaseMessageOptions): Promise<Message<true> | undefined>;
    sendTyping(): Promise<void>;
    setName(name: string, reason?: string): Promise<MooseChannel | undefined>;
    setNFSW(nsfw?: boolean, reason?: string): Promise<this | undefined>;
    setParent(channel: CategoryChannelResolvable, options?: SetParentOptions): Promise<this | undefined>;
    setPosition(position: number, options: SetChannelPositionOptions): Promise<this | undefined>;
    setRateLimitPerUser(rateLimitPerUser: number, reason?: string): Promise<this | undefined>;
    setSlowMode(ms: number, reason?: string): Promise<this | undefined>;
    setTopic(topic: string, reason?: string): Promise<this | undefined>;
    setType(type: ChannelType$1.GuildNews | ChannelType$1.GuildText, reason?: string): Promise<this | undefined>;
    toString(): string;
}

declare type Token = string;
declare type Intents = Readonly<"MessageContent" | "Guilds" | "GuildMembers" | "GuildBans" | "GuildEmojisAndStickers" | "GuildIntegrations" | "GuildWebhooks" | "GuildInvites" | "GuildVoiceStates" | "GuildPresences" | "GuildMessages" | "GuildMessageReactions" | "GuildMessageTyping" | "DirectMessages" | "DirectMessageReactions" | "DirectMessageTyping" | "GuildScheduledEvents" | "AutoModerationConfiguration" | "AutoModerationExecution">;
declare type Events = Readonly<"ready" | "applicationCommandPermissionsUpdate" | "cacheSweep" | "channelCreate" | "createDelete" | "channelPinsUpdate" | "channelUpdate" | "debug" | "error" | "guildBanAdd" | "guildBanRemove" | "guildCreate" | "guildDelete" | "emojiCreate" | "emojiDelete" | "emojiUpdate" | "guildIntegrationsUpdate" | "guildMemberAdd" | "guildMemberAvailable" | "guildMemberRemove" | "guildMembersChunk" | "guildMemberUpdate" | "roleCreate" | "roleDelete" | "roleUpdate" | "guildScheduledEventCreate" | "guildScheduledEventDelete" | "guildScheduledEventUpdate" | "guildScheduledEventAdd" | "guildScheduledEventRemove" | "stickerCreate" | "stickerDelete" | "stickerUpdate" | "guildUnavailable" | "guildUpdate" | "interactionCreate" | "invalidated" | "inviteCreate" | "inviteDelete" | "messageDeleteBulk" | "messageCreate" | "messageDelete" | "messageReactionAdd" | "messageReactionRemove" | "messageReactionRemoveAll" | "messageReactionRemoveEmoji" | "messageUpdate" | "presenceUpdate" | "shardDisconnect" | "shardError" | "shardReady" | "shardReconnecting" | "shardResume" | "stageInstanceCreate" | "stageInstanceDelete" | "stageInstanceUpdate" | "threadCreate" | "threadDelete" | "threadListSync" | "threadMembersUpdate" | "threadMemberUpdate" | "threadUpdate" | "typingStart" | "userUpdate" | "voiceServerUpdate" | "voiceStateUpdate" | "warn" | "webhookUpdate">;
declare type EventFunction = (client: MooseClient, args: EventFunctionArgs) => any;
declare type Colors = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "blackBright" | "gray" | "grey" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright";
declare type BGColors = "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgBlackBright" | "bgGray" | "bgGrey" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright";
declare type TextModifiers = "reset" | "bold" | "dim" | "italic" | "underline" | "overline" | "inverse" | "hidden" | "strikethrough" | "visible";
declare type Priority = "high" | "med" | "low" | "none";
declare type CacheBaseCache<Format extends {
    [key: string]: any;
}> = Format;
declare type SweeperInterval = {
    [key: string]: number | SweeperIntervalOptions;
} | SweeperIntervalOptions;
declare type ErrorType = SyntaxError | Error | MooseError;
declare type TypesOfError = "Moose" | "discord";
declare type ErrorEvents = "discordError" | "MooseError" | "syntaxError" | "error" | "doesntExistError";
declare type RanStringOptions = {
    length: number;
    caps?: boolean;
    lower?: boolean;
    special?: boolean;
    numbers?: boolean;
    exclude?: (string | number)[] | string | number;
};
declare type CommandRun = (({}: CommandRunArgs) => Promise<string> | Promise<Embed> | Promise<EmbedBuilder> | Promise<Attachment> | Promise<AttachmentBuilder> | Promise<void>);
declare type NamedArgs = {
    [key: string]: Arg;
};
declare type ArgType = "string" | "number" | "integer" | "float" | "double" | "user" | "boolean" | "subcommand" | "subcommandgroup" | "channel" | "mentionable" | "role" | "attachment" | "int";
declare type CommandOptionChoiceType = {
    name: string;
    value: string | number;
};
declare type SlashBuilderFunction = ((slashCommandBuilder: SlashCommandBuilder) => any);
declare type Builders = SlashCommandBooleanOption | SlashCommandStringOption | SlashCommandIntegerOption | SlashCommandChannelOption | SlashCommandMentionableOption | SlashCommandNumberOption | SlashCommandRoleOption | SlashCommandSubcommandBuilder | SlashCommandSubcommandGroupBuilder | SlashCommandUserOption;
declare type CommandSubOptions = CommandSubOptionsObject | SlashBuilderFunction;
declare type TimeString = string;
declare type DefaultModels = "role" | "user" | "guild";
declare type MooseCategoryChannelResolvable = Snowflake | MooseChannel;
declare type SpeedUnits = "meters per second" | "mps" | "feet per second" | "fps" | "feet per hour" | "fph" | "miles per hour" | "mph" | "kilometers per hour" | "kph";
/**
 * @property testing If the bot is in testing mode
 */
declare type MooseOptions = {
    testing?: boolean;
    testingServers?: string | string[];
    testingUsers?: string | string[];
    owner?: string | string[];
    intents?: ClientOptions["intents"];
    shards?: number | number[] | 'auto';
    shardCount?: number;
    closeTimeout?: number;
    makeCache?: CacheFactory;
    allowedMentions?: MessageMentionOptions;
    partials?: Partials[];
    failIfNotExists?: boolean;
    presence?: PresenceData;
    waitGuildTimeout?: number;
    sweepers?: SweeperOptions;
    ws?: WebSocketOptions;
    rest?: Partial<RESTOptions>;
    jsonTransformer?: (obj: unknown) => unknown;
    db?: DataBaseManagerOptions | false;
    testingLogs?: boolean;
    events?: {
        [key in Events]: (client: MooseClient) => any;
    };
    performance?: "low" | "high";
    loggerOptions?: MooseLoggerOptions;
    errors?: boolean | MooseErrorOptions;
    commandDir?: string | PathLike;
    featuresDir?: string | PathLike;
};
declare type CommandRunArgs = {
    author: MooseMember;
    messint: MessActions | Message | CommandInteraction;
    message: MessActions | Message;
    interaction: MessActions | CommandInteraction;
    mentions: MooseMember[];
    channel: MooseChannel;
    guild: MooseGuild;
    time: Date;
    shardId?: number;
    content?: string;
};
declare class MooseUser {
}
declare class MooseMember {
}
declare class MooseRole {
}
declare class MooseCache {
}
declare type Arg = {
    name: string;
    description: string;
    type: ArgType;
    regex?: RegExp;
    length?: number;
    required?: boolean;
    maxVal?: number;
    minVal?: number;
    choices?: CommandOptionChoiceType | CommandOptionChoiceType[];
    autocomplete?: boolean;
    nameLocalization?: {
        locale: LocaleString;
        name: string;
    };
    nameLocalizations?: LocalizationMap;
    descriptionLocalization?: {
        locale: LocaleString;
        name: string;
    };
    descriptionLocalizations?: LocalizationMap;
};
declare type EventFunctionArgs = {
    guild?: MooseGuild;
    user?: MooseUser;
    member?: MooseMember;
    channel?: MooseChannel;
};
declare type GuildStats = {
    botJoined: Date;
    memberCount: number;
    owner: MooseUser;
    ownerMember: MooseMember;
    adminRole?: MooseRole;
    modRole?: MooseRole;
    mods?: MooseMember[];
    admins?: MooseMember[];
    botPremium: boolean;
    cached: boolean;
    memberCache?: MooseCache;
    placeInCache?: number;
};
declare type CacheOptions = {
    name: string;
    size?: number;
    createIdRange?: boolean;
};
interface MooseCacheOptions extends CacheInsertOptions {
    size?: number;
    group?: string;
    idProp?: string;
}
interface BaseCacheOptions {
}
interface MooseLoggerOptions extends MooseLoggerStyles {
    listeners?: {
        [key in Events]: "auto" | ((client: MooseClient, event: keyof ClientEvents) => any);
    };
}
interface MooseLoggerStyles extends figlet.Options {
    box?: boolean;
    color?: Colors | string | [number, number, number] | RGBColorObject;
    fontStyles?: TextModifiers[];
    bgColor?: BGColors;
    return?: boolean;
}
interface DataBaseManagerOptions extends mongoose.ConnectOptions {
    caching?: boolean;
    schemaPath?: string | PathLike;
    sweeperInterval?: number | SweeperInterval;
    numberOfCaches?: number | "each" | "auto";
    mongoURI: string;
    defaultModels?: "all" | [DefaultModels] | DefaultModelObject;
}
declare type UserModelOptions = {
    modelName: string;
    isModPath: string;
    isBlackListedPath: string;
    isWhiteListedPath: string;
};
declare type RoleModelOptions = {
    modelName: string;
    isModPath: string;
    isAdminPath: string;
    isOwnerPath: string;
    isMutedPath: string;
};
declare type GuildModelOptions = {
    modelName: string;
    isBlackListedPath: string;
    isWhiteListedPath: string;
};
declare type ChannelType = {
    serverId: string | number;
    channelId: string | number;
};
declare type DefaultModelObject = {
    user?: "default" | UserModelOptions;
    guild?: "default" | GuildModelOptions;
    role?: "default" | RoleModelOptions;
};
interface SweeperIntervalOptions {
    dumbClear?: boolean;
    cacheSizeLimit?: number;
    regexDelete?: RegExp | string;
    interval?: number;
    cleanFunction?: (value: any, added: Date, cacheSize: number) => boolean;
    auto?: boolean;
}
interface MooseEvents extends ClientEvents {
    MooseError: [client: MooseClient, error: ErrorType];
}
interface MooseErrorOptions {
    errorSystem?: boolean;
    handleDefault?: boolean;
    handleMoose?: boolean;
    emitOnError?: TypesOfError | boolean;
    emitOnMooseError?: TypesOfError | boolean;
    emitOnDiscordError?: TypesOfError | boolean;
    keepBotRunning?: boolean;
    errorHandling?: ((error: ErrorType) => any) | "default";
    shardErrorHandling?: ((error: ErrorType, shardNumber: number) => any) | "default";
    customErrors?: CustomErrors | CustomErrors[];
    log?: boolean | "error" | "warning";
}
interface CustomErrors {
    event: string;
    handler?: (error: ErrorType, ...args: any[]) => any;
}
declare type Condition = {
    error: ErrorEvents | "all";
    cases: MooseErrorOptions | MooseErrorOptions[];
};
interface ICache<Form> {
    time: Date;
    value: Form;
    id: string;
    expires?: Date;
}
declare type CommandOptions = {
    name: string;
    description: string;
    ephemeral?: boolean;
    aliases?: string | string[];
    nsfw?: boolean;
    dm?: boolean;
    dmOnly?: boolean;
    dft?: boolean;
    regex?: RegExp[];
    guarded?: boolean;
    channelOnly?: boolean;
    channel?: boolean;
    privateCommand?: boolean;
    argStyle?: "string" | "multiple" | "single" | "array" | "list";
    unknown?: boolean;
    hidden?: boolean;
    ownerOnly?: boolean;
    cacheResults?: boolean;
    schema?: mongoose.Schema | mongoose.Schema[];
    maxArgs?: number;
    minArgs?: number;
    rest?: boolean;
    namedArgs?: NamedArgs;
    adminOnly?: boolean;
    modOnly?: boolean;
    whiteListedRoles?: string | string[] | PathLike | MooseRole | MooseRole[];
    blacklistedRoles?: string | string[] | PathLike | MooseRole | MooseRole[];
    blacklistedUsers?: string | string[] | PathLike | MooseUser | MooseUser[];
    whitelistedUsers?: string | string[] | PathLike | MooseUser | MooseUser[];
    blacklistedGuilds?: string | string[] | PathLike | MooseGuild | MooseGuild[];
    whitelistedGuilds?: string | string[] | PathLike | MooseGuild | MooseGuild[];
    blacklistedChannels?: PathLike | MooseChannel | MooseChannel[] | ChannelType | ChannelType[];
    whitelistedChannels?: PathLike | MooseChannel | MooseChannel[] | ChannelType | ChannelType[];
    serverTimeLimit?: number;
    userTimeLimit?: number;
    allowExtraArgs?: boolean;
    run: CommandRun;
    interactionRun?: CommandRun;
    interaction?: boolean;
    argSplitter?: string | ((args: string) => string);
    args?: Arg | Arg[];
    lastRunBy?: number;
    autoaliases?: boolean;
    format?: CommandFormat[];
    details?: string;
    nsfwOnly?: boolean;
    capsSensitive?: boolean;
    userPerms?: Permissions | bigint | number;
    testOnly?: boolean;
    slashCommand?: boolean;
    slash?: boolean;
    nameLocalizations?: LocalizationMap;
    slashFunction?: SlashBuilderFunction;
};
declare type CommandSubOptionsObject = {
    type: "string" | "number" | "integer" | "float" | "double" | "user" | "boolean" | "subcommand" | "subcommandgroup" | "user" | "channel" | "mentionable" | "role" | "attachment" | "int";
    name: string;
    description: string;
    choices?: CommandOptionChoiceType | CommandOptionChoiceType[];
    autocomplete?: boolean;
    required?: boolean;
    minVal?: number;
    maxVal?: number;
    nameLocalization?: {
        locale: LocaleString;
        name: string;
    };
    nameLocalizations?: LocalizationMap;
    descriptionLocalization?: {
        locale: LocaleString;
        name: string;
    };
    descriptionLocalizations?: LocalizationMap;
};
declare type SubCommand = {};
declare type CommandFormat = CommandObjectFormat | SlashBuilderFunction;
declare type CommandObjectFormat = {
    name: string;
    description?: string;
    options?: CommandSubOptions;
    type: ArgType;
};
declare type RGBColorObject = {
    r: number;
    b: number;
    g: number;
} | {
    red: number;
    blue: number;
    green: number;
};
interface AutoCacheOptions extends CacheInsertOptions {
}
declare type CacheInsertOptions = {
    expires?: Date | number | TimeString;
    overwrite?: boolean;
    errorIfFull?: boolean;
    deleteIfFull?: "all" | "oldest" | false;
    errorIfExists?: boolean;
};
declare type JSONWarning = {
    userId: string;
    authorId: string;
    time: string;
    reason: string;
    serverId: string;
};
declare type MicroCacheCacheResultOptions = {
    args?: any[];
    expires?: TimeString | Date | number;
    resultsDependOnArgs?: boolean;
    capsSensitiveArgs?: boolean;
};

export { Arg, ArgType, AutoCacheOptions, BGColors, BaseCacheOptions, Builders, CacheBaseCache, CacheInsertOptions, CacheOptions, ChannelType, Colors, CommandBase, CommandFormat, CommandObjectFormat, CommandOptionChoiceType, CommandOptions, CommandRun, CommandRunArgs, CommandSubOptions, CommandSubOptionsObject, Condition, CustomErrors, DataBaseManagerOptions, DefaultModelObject, DefaultModels, ErrorEvents, ErrorType, EventFunction, EventFunctionArgs, Events, GuildModelOptions, GuildStats, ICache, Intents, JSONWarning, MessActions, MicroCacheCacheResultOptions, MooseCache, MooseCacheOptions, MooseCategoryChannelResolvable, MooseChannel, MooseError, MooseErrorOptions, MooseEvents, MooseGuild, MooseLoggerOptions, MooseLoggerStyles, MooseMember, MooseOptions, MooseRole, MooseUser, NamedArgs, Priority, RGBColorObject, RanStringOptions, RoleModelOptions, SlashBuilderFunction, SpeedUnits, SubCommand, SweeperInterval, SweeperIntervalOptions, TextModifiers, TimeString, Token, TypesOfError, UserModelOptions, MooseClient as default };
