import { PathLike } from "fs";
import mongoose from "mongoose";
import { APIApplicationCommandAttachmentOption, APIApplicationCommandOptionChoice, Locale, LocalizationMap, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBooleanOption, SlashCommandBuilder, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandStringOption } from "discord.js";
import MooseClient, { Arg, Builders, ChannelType, CommandFormat, CommandObjectFormat, CommandOptions, CommandRunArgs, CommandSubOptions, CommandSubOptionsObject, MooseChannel, MooseRole, MooseUser, NamedArgs, SlashBuilderFunction } from "../..";
import DisCrackGuild from "../../extentions/guild.extentions";
import settings from "../../settings";
import { convertToCamelCase } from "../../functions";
import { SlashCommandTypesEnum } from "./enums";

// Add command aliases for servers, users, and channels

abstract class CommandBase implements CommandOptions {
    protected client!: MooseClient
    readonly name: string
    readonly description: string
    readonly aliases: string[]
    readonly ephemeral: boolean
    readonly privateCommand: boolean // Alias for ephemeral
    readonly nsfw: boolean
    readonly dm: boolean
    readonly dmOnly: boolean // Alias for dm
    readonly dft: boolean // Default Command
    readonly unknown: boolean // Alias for dft
    readonly hidden: boolean
    readonly ownerOnly: boolean
    readonly regex?: RegExp[] 
    readonly guarded: boolean
    readonly channel: boolean
    readonly channelOnly: boolean // Alias for channel
    readonly argStyle: typeof settings.command.argStyleArray[number]
    readonly cacheResults: boolean
    readonly schema: mongoose.Schema | mongoose.Schema[]
    readonly maxArgs?: number
    readonly minArgs: number
    readonly rest: boolean
    readonly namedArgs?: NamedArgs
    readonly adminOnly: boolean
    readonly modOnly: boolean
    private _whiteListedRoles: string[] | PathLike | MooseRole | MooseRole[]
    private _blacklistedRoles: string[] | PathLike | MooseRole | MooseRole[]
    private _blacklistedUsers: string[] | PathLike | MooseUser | MooseUser[]
    private _whitelistedUsers: string[] | PathLike | MooseUser | MooseUser[]
    private _blacklistedGuilds: string[] | PathLike | DisCrackGuild | DisCrackGuild[]
    private _whitelistedGuilds: string[] | PathLike | DisCrackGuild | DisCrackGuild[]
    private _blacklistedChannels: PathLike | MooseChannel | MooseChannel[] | ChannelType | ChannelType[]
    private _whitelistedChannels: PathLike | MooseChannel | MooseChannel[] | ChannelType | ChannelType[]
    readonly serverTimeLimit?: number
    readonly userTimeLimit?: number
    readonly allowExtraArgs: boolean
    readonly interaction: boolean
    readonly argSplitter: string | ((args: string) => string)
    readonly args: Arg[]
    readonly lastRunBy: number
    readonly autoaliases: boolean
    private _apiFormat: RESTPostAPIApplicationCommandsJSONBody
    readonly nsfwOnly: boolean
    readonly capsSensitive: boolean
    readonly testOnly: boolean
    readonly slash: boolean
    readonly slashCommand: boolean
    readonly nameLocalizations?: LocalizationMap
    readonly slashFunction?: SlashBuilderFunction
    private _cache = new Map<string, any>()
    
    constructor(options: CommandOptions) {
        this.name = options.name.toString()
        this.description = options.description.toString()
        const {
            aliases = [],
            ephemeral,
            privateCommand,
            nsfw = false,
            dm, 
            dmOnly,
            dft,
            unknown,
            hidden = settings.command.defaultHidden,
            ownerOnly = settings.command.defaultOwnerOnly,
            regex,
            guarded = settings.command.defaultGuarded,
            channel,
            channelOnly,
            argStyle = settings.command.defaultArgStyle,
            cacheResults = settings.command.defaultCacheResult,
            schema = [],
            maxArgs,
            minArgs = 0,
            rest = settings.command.defaultRest,
            namedArgs,
            adminOnly = settings.command.defaultAdminOnly,
            modOnly = settings.command.defaultModOnly,
            whiteListedRoles: whiteListedRoles = [],
            blacklistedRoles: blacklistedRoles = [],
            whitelistedChannels: whitelistedChannels = [],
            blacklistedChannels: blacklistedChannels = [],
            whitelistedGuilds: whitelistedGuilds = [],
            blacklistedGuilds: blacklistedGuilds = [], 
            whitelistedUsers: whitelistedUsers = [],
            blacklistedUsers: blacklistedUsers = [],
            serverTimeLimit,
            userTimeLimit,
            allowExtraArgs = settings.command.defaultAllowExtraArgs,
            interaction = settings.command.defaultInteractions,
            argSplitter = settings.command.defaultArgSplitter,
            args = [],
            lastRunBy = settings.command.defaultLastRunBy,
            autoaliases = settings.command.defaultAutoAlias,
            format,
            nsfwOnly = settings.command.defaultNSFWOnly,
            capsSensitive = settings.command.defaultCapsSensitive,
            testOnly = settings.command.defaultTestOnly,
            slash,
            slashCommand,
            nameLocalizations,
            slashFunction
        } = options

        this.aliases = [...aliases] // Create Alias Manager
        this.ephemeral = (typeof ephemeral === "undefined" ? (privateCommand ?? settings.command.defaultEphemeral) : ephemeral)
        this.privateCommand = this.ephemeral
        this.nsfw = nsfw
        this.dm = (typeof dm === "undefined" ? (dmOnly ?? settings.command.dmOnlyDefault) : dm)
        this.dmOnly = this.dm
        this.dft = (typeof dft === "undefined" ? (unknown ?? false) : dft)
        this.unknown = this.dft
        this.hidden = hidden
        this.ownerOnly = ownerOnly
        this.regex = regex
        this.guarded = guarded
        this.channel = (typeof channel === "undefined" ? (channelOnly ?? settings.command.defaultChannelOnly) : channel)
        this.channelOnly = this.channel
        this.argStyle = this._verifyArgStyle(argStyle)
        this.cacheResults = cacheResults
        this.schema = (Array.isArray(schema) ? schema : [schema])
        this.maxArgs = maxArgs
        this.minArgs = minArgs
        this.rest = rest
        this.namedArgs = namedArgs // Make verifier
        this.adminOnly = adminOnly
        this.modOnly = modOnly
        this._whiteListedRoles = whiteListedRoles
        this._blacklistedRoles = blacklistedRoles
        this._whitelistedChannels = whitelistedChannels
        this._blacklistedChannels = blacklistedChannels
        this._whitelistedGuilds = whitelistedGuilds
        this._blacklistedGuilds = blacklistedGuilds
        this._whitelistedUsers = whitelistedUsers
        this._blacklistedUsers = blacklistedUsers
        this.serverTimeLimit = serverTimeLimit
        this.userTimeLimit = userTimeLimit
        this.allowExtraArgs = allowExtraArgs
        this.interaction = interaction
        this.argSplitter = argSplitter
        this.args = (Array.isArray(args) ? args : [args])
        this.lastRunBy = lastRunBy
        this.autoaliases = autoaliases
        this._apiFormat = this._createSlashData(format)
        this.nsfwOnly = nsfwOnly
        this.capsSensitive = capsSensitive
        this.testOnly = testOnly
        this.slash = (typeof slash === "undefined" ? (slashCommand ?? settings.command.defaultSlash) : slash)
        this.slashCommand = this.slash
        this.nameLocalizations = nameLocalizations
        this.slashFunction = slashFunction

        if (this.autoaliases) this._autoAlias()
    }

    public async run(args: CommandRunArgs) {
        throw new Error("No Run Method Defined")
    }

    public async interactionRun(args: CommandRunArgs) {
        throw new Error("No Interaction Run Method Defined")
    }

    private _verifyArgStyle(argStyle: string): typeof settings.command.argStyleArray[number] {
        argStyle = argStyle.toLowerCase().trim()
        if (settings.command.argStyleArray.includes(argStyle as typeof settings.command.argStyleArray[number])) return argStyle as typeof settings.command.argStyleArray[number]
        return "string"
    }

    public get blacklistedChannels() {
        return this._blacklistedChannels
    }

    public get whitelistedChannels() {
        return this._whitelistedChannels
    }

    public get blacklistedGuilds() {
        return this._blacklistedGuilds
    }

    public get whitelistedGuilds() {
        return this._whitelistedGuilds
    }

    public get blacklistedRoles() {
        return this._blacklistedRoles
    }

    public get blacklistedUsers() {
        return this._blacklistedUsers
    }

    public get whitelistedUsers() {
        return this._whitelistedUsers
    }

    public get whiteListedRoles() {
        return this._whiteListedRoles
    }

    public get getApiCommandFormat() {
        return this._apiFormat
    }

    public initCommand(client: MooseClient) {
        if (this.client) return console.warn(`The ${this.name} command was initated twice`)
        this.client = client
        return true
    }

    private _autoAlias() {
        const aliases: string[] = []
        aliases.push(__filename)
        aliases.push(this.name.toUpperCase(), this.name.toUpperCase().replace(/\W/gi, ""), this.name.toLowerCase(), this.name.toLowerCase().replace(/\W/gi, ""))

        if (Array.isArray(this.name.match(/\W/g))) {
            aliases.push(convertToCamelCase(this.name.split(/\W/g)))
        }

        this.aliases.push(...aliases)
    }

    private _createSlashData(format: CommandFormat | CommandFormat[] | undefined) {

        let newFormat: SlashBuilderFunction | CommandSubOptionsObject[]
        
        // Data formating
        if (typeof format === "undefined") {

            const temp: CommandSubOptionsObject[] = []

            // Create format based on user supplied args
            this.args.forEach(arg => {
                temp.push(arg)
            })

            newFormat = [] as CommandSubOptionsObject[]

        } else if (!Array.isArray(format)) {
            newFormat = [format] as CommandSubOptionsObject[]
        } else newFormat = format as CommandSubOptionsObject[]


        return this._createFormatClasses(newFormat).toJSON()
    }

    public get slashData() {
        return
    }

    private _createFormatClasses(format: CommandSubOptionsObject[] | SlashBuilderFunction, builder = new SlashCommandBuilder()): SlashCommandBuilder {

        if (typeof format === "function") return format(builder)

        // Add name and description localizer eventually 
        builder.setName(this.name)
        builder.setDescription(this.description)

        format.forEach(form => {
            if (typeof (builder as { [key: string]: any })[SlashCommandTypesEnum[form.type]] !== "function") { throw new SyntaxError(`Type ${form.type} is not a valid type`) }
            (builder[SlashCommandTypesEnum[form.type]] as (option : (option: Builders) => any) => any)(option => {
                    
                // Makes the command required or not
                if (typeof (option as SlashCommandStringOption).setRequired  === "function") {
                    (option as SlashCommandStringOption).setRequired((form.required !== false) ? true : false)
                }

                // Sets min value of input for number and int options
                if (typeof (option as SlashCommandIntegerOption).setMinValue === "function" 
                    && typeof form.minVal === "number"
                ) (option as SlashCommandIntegerOption).setMinValue(form.minVal)

                // Sets max value of input for number and int options
                if (typeof (option as SlashCommandIntegerOption).setMaxValue === "function" 
                    && typeof form.maxVal === "number"
                ) (option as SlashCommandIntegerOption).setMaxValue(form.maxVal)

                // Sets name and localizier if applicable 
                if (typeof form.nameLocalization === "object" && !Array.isArray(form.nameLocalization)) {
                    option.setNameLocalization(form.nameLocalization.locale, form.nameLocalization.name)
                } else if (typeof form.nameLocalizations === "object" && !Array.isArray(form.nameLocalizations)) {
                    option.setNameLocalizations(form.nameLocalizations)
                } else option.setName(form.name)

                // Sets description and localizier if applicable 
                if (typeof form.descriptionLocalization === "object" && !Array.isArray(form.nameLocalization)) {
                    option.setDescriptionLocalization(form.descriptionLocalization.locale, form.descriptionLocalization.name)
                } else if (typeof form.nameLocalizations === "object" && !Array.isArray(form.nameLocalizations)) {
                    option.setDescriptionLocalizations(form.descriptionLocalizations as LocalizationMap)
                } else option.setDescription(form.name)

                // Sets autocomplete if applicable
                if (typeof (option as SlashCommandStringOption).setAutocomplete === "function") {
                    (option as SlashCommandStringOption).setAutocomplete(form.autocomplete ?? true)
                }

                // Type checking the format type
                if (typeof (option as { [key: string]: any })[SlashCommandTypesEnum[form.type]] !== "function") throw new SyntaxError(`${form.type} is not a valid type`);

                // Add choices if applicable 
                if (typeof (option as SlashCommandStringOption).addChoices && form.choices) {
                    (option as SlashCommandStringOption).addChoices(form.choices as APIApplicationCommandOptionChoice<any>)
                }
            })
        })

        return builder
    }

    protected cacheManager() {
        this.client
    }
}

export default CommandBase