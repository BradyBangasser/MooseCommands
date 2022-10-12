// Rename to Moose Commands

import MooseClient from "./client"
import { ClientOptions, CacheFactory, MessageMentionOptions, Partials, PresenceData, SweeperOptions, WebSocketOptions, RESTOptions, ClientEvents, Client, Interaction, InteractionReplyOptions, Embed, EmbedBuilder, Attachment, AttachmentBuilder, Message, CommandInteraction, SlashCommandBuilder, If, LocalizationMap, SlashCommandBooleanOption, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandStringOption, Locale, LocaleString, SlashCommandRoleOption, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder, SlashCommandUserOption, Snowflake } from "discord.js";
import mongoose, { Mongoose } from "mongoose";
import figlet from "figlet";
import MooseGuild from "./extentions/guild.extentions";
import MessActions from "./extentions/messactions.extentions";
import type { PathLike } from "fs";
import { generateRandomString } from "./functions";
import { MooseError } from "./extentions/error.extentions";
import CommandBase from "./client/commandHandler/commandBase";
import MooseChannel from "./extentions/channel.extention";

export type Token = string
export type Intents = Readonly<"MessageContent" | "Guilds" | "GuildMembers" | "GuildBans" | "GuildEmojisAndStickers" | "GuildIntegrations" | "GuildWebhooks" | "GuildInvites" | "GuildVoiceStates" | "GuildPresences" | "GuildMessages" | "GuildMessageReactions" | "GuildMessageTyping" | "DirectMessages" | "DirectMessageReactions" | "DirectMessageTyping" | "GuildScheduledEvents" | "AutoModerationConfiguration" | "AutoModerationExecution">
export type Events = Readonly<"ready" | "applicationCommandPermissionsUpdate" | "cacheSweep" | "channelCreate" | "createDelete" | "channelPinsUpdate" | "channelUpdate" | "debug" | "error" | "guildBanAdd" | "guildBanRemove" | "guildCreate" | "guildDelete" | "emojiCreate" | "emojiDelete" | "emojiUpdate" | "guildIntegrationsUpdate" | "guildMemberAdd" | "guildMemberAvailable" | "guildMemberRemove" | "guildMembersChunk" | "guildMemberUpdate" | "roleCreate" | "roleDelete" | "roleUpdate" | "guildScheduledEventCreate" | "guildScheduledEventDelete" | "guildScheduledEventUpdate" | "guildScheduledEventAdd" | "guildScheduledEventRemove" | "stickerCreate" | "stickerDelete" | "stickerUpdate" | "guildUnavailable" | "guildUpdate" | "interactionCreate" | "invalidated" | "inviteCreate" | "inviteDelete" | "messageDeleteBulk" | "messageCreate" | "messageDelete" | "messageReactionAdd" | "messageReactionRemove" | "messageReactionRemoveAll" | "messageReactionRemoveEmoji" | "messageUpdate" | "presenceUpdate" | "shardDisconnect" | "shardError" | "shardReady" | "shardReconnecting" | "shardResume" | "stageInstanceCreate" | "stageInstanceDelete" | "stageInstanceUpdate" | "threadCreate" | "threadDelete" | "threadListSync" | "threadMembersUpdate" | "threadMemberUpdate" | "threadUpdate" | "typingStart" | "userUpdate" | "voiceServerUpdate" | "voiceStateUpdate" | "warn" | "webhookUpdate">
export type EventFunction = (client: MooseClient, args: EventFunctionArgs) => any
export type Colors = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "blackBright" | "gray" | "grey" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright"
export type BGColors = "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgBlackBright" | "bgGray" | "bgGrey" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright"
export type TextModifiers = "reset" | "bold" | "dim" | "italic" | "underline" | "overline" | "inverse" | "hidden" | "strikethrough" | "visible"
export type Priority = "high" | "med" | "low" | "none"
export type CacheBaseCache<Format extends { [key: string]: any }> = Format
export type SweeperInterval = { [key: string]: number | SweeperIntervalOptions } | SweeperIntervalOptions
export type ErrorType = SyntaxError | Error | MooseError
export type TypesOfError = "Moose" | "discord"
export type ErrorEvents = "discordError" | "MooseError" | "syntaxError" | "error" | "doesntExistError"
export type RanStringOptions = { length: number, caps?: boolean, lower?: boolean, special?: boolean, numbers?: boolean, exclude?: (string | number)[] | string | number }
export type CommandRun = (({}: CommandRunArgs) => Promise<string> | Promise<Embed> | Promise<EmbedBuilder>| Promise<Attachment> | Promise<AttachmentBuilder> | Promise<void>)
export type NamedArgs = { [key: string]: Arg }
export type ArgType = "string" | "number" | "integer" | "float" | "double" | "user" | "boolean" | "subcommand" | "subcommandgroup" | "channel" | "mentionable" | "role" | "attachment" | "int"
export type CommandOptionChoiceType = { name: string, value: string | number }
export type SlashBuilderFunction = ((slashCommandBuilder: SlashCommandBuilder) => any)
export type Builders = SlashCommandBooleanOption | SlashCommandStringOption | SlashCommandIntegerOption | SlashCommandChannelOption | SlashCommandMentionableOption | SlashCommandNumberOption | SlashCommandRoleOption | SlashCommandSubcommandBuilder | SlashCommandSubcommandGroupBuilder | SlashCommandUserOption
export type CommandSubOptions = CommandSubOptionsObject | SlashBuilderFunction
export type TimeString = string
export type DefaultModels = "role" | "user" | "guild"
export type MooseCategoryChannelResolvable = Snowflake | MooseChannel;
export type SpeedUnits = "meters per second" | "mps" | "feet per second" | "fps" | "feet per hour" | "fph" | "miles per hour" | "mph" | "kilometers per hour" | "kph"

/**
 * @property testing If the bot is in testing mode
 */

export type MooseOptions = {
    testing?: boolean
    testingServers?: string | string[]
    testingUsers?: string | string[]
    owner?: string | string[]
    intents?: ClientOptions["intents"]
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
    db?: DataBaseManagerOptions | false
    testingLogs?: boolean
    events?: { [key in Events]: (client: MooseClient) => any },
    performance?: "low" | "high"
    loggerOptions?: MooseLoggerOptions
    errors?: boolean | MooseErrorOptions
    commandDir?: string | PathLike
    featuresDir?: string | PathLike
}

export type CommandRunArgs = {
    author: MooseMember
    messint: MessActions | Message | CommandInteraction
    message: MessActions | Message
    interaction: MessActions | CommandInteraction
    mentions: MooseMember[]
    channel: MooseChannel // Make sure to support dms
    guild: MooseGuild
    time: Date
    shardId?: number
    content?: string
}

export class MooseUser {

}

export class MooseMember {

}

export class MooseRole {

}

export class MooseCache {

}

export type Arg = {
    name: string
    description: string
    type: ArgType
    regex?: RegExp
    length?: number
    required?: boolean
    maxVal?: number
    minVal?: number
    choices?: CommandOptionChoiceType | CommandOptionChoiceType[]
    autocomplete?: boolean
    nameLocalization?: { locale: LocaleString, name: string }
    nameLocalizations?: LocalizationMap
    descriptionLocalization?: { locale: LocaleString, name: string }
    descriptionLocalizations?: LocalizationMap

}

export type EventFunctionArgs = {
    guild?: MooseGuild
    user?: MooseUser
    member?: MooseMember
    channel?: MooseChannel
}

export type GuildStats = {
    botJoined: Date
    memberCount: number
    owner: MooseUser
    ownerMember: MooseMember
    adminRole?: MooseRole
    modRole?: MooseRole
    mods?: MooseMember[]
    admins?: MooseMember[]
    botPremium: boolean
    cached: boolean
    memberCache?: MooseCache
    placeInCache?: number
    
}

export type CacheOptions = {
    name: string
    size?: number
    createIdRange?: boolean

}
export interface MooseCacheOptions extends CacheInsertOptions {
    size?: number
    group?: string
    idProp?: string
}

export interface BaseCacheOptions {

}

export interface MooseLoggerOptions extends MooseLoggerStyles {
    listeners?: { [key in Events]: "auto" | ((client: MooseClient, event: keyof ClientEvents) => any) }
}

export interface MooseLoggerStyles extends figlet.Options {
    box?: boolean
    color?: Colors | string | [number, number, number] | RGBColorObject
    fontStyles?: TextModifiers[]
    bgColor?: BGColors
    return?: boolean
}

export interface DataBaseManagerOptions extends mongoose.ConnectOptions {
    caching?: boolean
    schemaPath?: string | PathLike
    sweeperInterval?: number | SweeperInterval
    numberOfCaches?: number | "each" | "auto"
    mongoURI: string
    defaultModels?: "all" | [DefaultModels] | DefaultModelObject
}

export type UserModelOptions = {
    modelName: string
    isModPath: string
    isBlackListedPath: string
    isWhiteListedPath: string
}

export type RoleModelOptions = {
    modelName: string
    isModPath: string
    isAdminPath: string
    isOwnerPath: string
    isMutedPath: string
}

export type GuildModelOptions = {
    modelName: string
    isBlackListedPath: string
    isWhiteListedPath: string
}

export type ChannelType = {
    serverId: string | number
    channelId: string | number
}

export type DefaultModelObject = {
    user?: "default" | UserModelOptions
    guild?: "default" | GuildModelOptions
    role?: "default" | RoleModelOptions
}

export interface SweeperIntervalOptions {
    dumbClear?: boolean
    cacheSizeLimit?: number
    regexDelete?: RegExp | string
    interval?: number
    cleanFunction?: (value: any, added: Date, cacheSize: number) => boolean
    auto?: boolean
}

export interface MooseEvents extends ClientEvents {
    MooseError: [client: MooseClient, error: ErrorType]
}

export interface MooseErrorOptions {
    errorSystem?: boolean
    handleDefault?: boolean
    handleMoose?: boolean
    emitOnError?: TypesOfError | boolean
    emitOnMooseError?: TypesOfError | boolean
    emitOnDiscordError?: TypesOfError | boolean
    keepBotRunning?: boolean
    errorHandling?: ((error: ErrorType) => any) | "default"
    shardErrorHandling?: ((error: ErrorType, shardNumber: number) => any) | "default"
    customErrors?: CustomErrors | CustomErrors[]
    log?: boolean | "error" | "warning"
}

export interface CustomErrors {
    event: string
    handler?: (error: ErrorType, ...args: any[]) => any
}

export type Condition = {
    error: ErrorEvents | "all",
    cases: MooseErrorOptions | MooseErrorOptions[]
}

export interface ICache<Form> {
    time: Date
    value: Form
    id: string
    expires?: Date
}

export type CommandOptions = {
    name: string
    description: string
    ephemeral?: boolean
    aliases?: string | string[]
    nsfw?: boolean
    dm?: boolean
    dmOnly?: boolean // Alias for dm
    dft?: boolean // Default
    regex?: RegExp[]
    guarded?: boolean
    channelOnly?: boolean
    channel?: boolean // Alias for channelOnly
    privateCommand?: boolean // Alias for ephemeral
    argStyle?: "string" | "multiple" | "single" | "array" | "list"
    unknown?: boolean
    hidden?: boolean
    ownerOnly?: boolean
    cacheResults?: boolean
    schema?: mongoose.Schema | mongoose.Schema[]
    maxArgs?: number
    minArgs?: number
    rest?: boolean
    namedArgs?: NamedArgs
    adminOnly?: boolean
    modOnly?: boolean
    whiteListedRoles?: string | string[] | PathLike | MooseRole | MooseRole[]
    blacklistedRoles?: string | string[] | PathLike | MooseRole | MooseRole[]
    blacklistedUsers?: string | string[] | PathLike | MooseUser | MooseUser[]
    whitelistedUsers?: string | string[] | PathLike | MooseUser | MooseUser[]
    blacklistedGuilds?: string | string[] | PathLike | MooseGuild | MooseGuild[]
    whitelistedGuilds?: string | string[] | PathLike | MooseGuild | MooseGuild[]
    blacklistedChannels?: PathLike | MooseChannel | MooseChannel[] | ChannelType | ChannelType[]
    whitelistedChannels?: PathLike | MooseChannel | MooseChannel[] | ChannelType | ChannelType[]
    serverTimeLimit?: number
    userTimeLimit?: number
    allowExtraArgs?: boolean
    run: CommandRun
    interactionRun?: CommandRun
    interaction?: boolean
    argSplitter?: string | ((args: string) => string)
    args?: Arg | Arg[]
    lastRunBy?: number
    autoaliases?: boolean
    format?: CommandFormat[]
    details?: string
    nsfwOnly?: boolean
    capsSensitive?: boolean
    userPerms?: Permissions | bigint | number
    testOnly?: boolean
    slashCommand?: boolean
    slash?: boolean
    nameLocalizations?: LocalizationMap
    slashFunction?: SlashBuilderFunction
}

export type CommandSubOptionsObject = {
    type: "string" | "number" | "integer" | "float" | "double" | "user" | "boolean" | "subcommand" | "subcommandgroup" | "user" | "channel" | "mentionable" | "role" | "attachment" | "int"
    name: string
    description: string
    choices?: CommandOptionChoiceType | CommandOptionChoiceType[]
    autocomplete?: boolean
    required?: boolean
    minVal?: number
    maxVal?: number
    nameLocalization?: { locale: LocaleString, name: string }
    nameLocalizations?: LocalizationMap
    descriptionLocalization?: { locale: LocaleString, name: string }
    descriptionLocalizations?: LocalizationMap
}

export type SubCommand = {

}

export type CommandFormat = CommandObjectFormat | SlashBuilderFunction
export type CommandObjectFormat = {
    name: string
    description?: string
    options?: CommandSubOptions
    type: ArgType
}

export type RGBColorObject = {
    r: number
    b: number
    g: number
} | {
    red: number
    blue: number
    green: number
}

export interface AutoCacheOptions extends CacheInsertOptions {

}

export type CacheInsertOptions = {
    expires?: Date | number | TimeString // Date or Seconds or TimeString
    overwrite?: boolean
    errorIfFull?: boolean
    deleteIfFull?: "all" | "oldest" | false
    errorIfExists?: boolean
}

export type JSONWarning = {
    userId: string
    authorId: string
    time: string
    reason: string
    serverId: string
}

export type MicroCacheCacheResultOptions = {
    args?: any[]
    expires?: TimeString | Date | number
    resultsDependOnArgs?: boolean
    capsSensitiveArgs?: boolean
}

export { MooseGuild, MessActions, MooseError, CommandBase, MooseChannel }
export default MooseClient