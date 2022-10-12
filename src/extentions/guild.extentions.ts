import { Guild, Snowflake, Role, NonThreadGuildBasedChannel, Collection, GuildBanManager, GuildChannelManager, GuildApplicationCommandManager, GuildDefaultMessageNotifications, GuildExplicitContentFilter, GuildInviteManager, Base64Resolvable, BaseFetchOptions, BufferResolvable, GuildAuditLogs, GuildAuditLogsFetchOptions, GuildAuditLogsResolvable, GuildEditData, GuildEmojiManager, GuildMember, GuildMemberManager, GuildMemberResolvable, GuildMFALevel, GuildPremiumTier, GuildPreview, GuildScheduledEventManager, GuildStickerManager, GuildTemplate, GuildVerificationLevel, GuildWidgetSettings, GuildWidgetSettingsData, ImageURLOptions, Integration, InternalDiscordGatewayAdapterCreator, Locale, PresenceManager, RoleManager, StageInstanceManager, SystemChannelFlagsBitField, SystemChannelFlagsResolvable, TextChannel, TextChannelResolvable, Vanity, VoiceChannel, VoiceChannelResolvable, VoiceStateManager, Webhook, WebSocketShard, WelcomeScreen, WelcomeScreenEditData, Widget } from "discord.js"; 
import MooseClient from "../client";

class MooseGuild {

    private client: MooseClient
    private discordGuild: Guild
  
    public afkChannelId: Snowflake | null;
    public afkTimeout: number;
    public applicationId: Snowflake | null;
    public approximateMemberCount: number | null;
    public approximatePresenceCount: number | null;
    public available: boolean;
    public bans: GuildBanManager;
    public channels: GuildChannelManager;
    public commands: GuildApplicationCommandManager;
    public defaultMessageNotifications: GuildDefaultMessageNotifications;
    public discoverySplash: string | null;
    public emojis: GuildEmojiManager;
    public explicitContentFilter: GuildExplicitContentFilter;
    public invites: GuildInviteManager;
    public joinedTimestamp: number;
    public large: boolean;
    public maximumMembers: number | null;
    public maximumPresences: number | null;
    public memberCount: number;
    public members: GuildMemberManager;
    public mfaLevel: GuildMFALevel;
    public ownerId: Snowflake;
    public preferredLocale: Locale;
    public premiumProgressBarEnabled: boolean;
    public premiumTier: GuildPremiumTier;
    public presences: PresenceManager;
    public publicUpdatesChannelId: Snowflake | null;
    public roles: RoleManager;
    public rulesChannelId: Snowflake | null;
    public scheduledEvents: GuildScheduledEventManager;
    public shardId: number;
    public stageInstances: StageInstanceManager;
    public stickers: GuildStickerManager;
    public systemChannelFlags: Readonly<SystemChannelFlagsBitField>;
    public systemChannelId: Snowflake | null;
    public vanityURLUses: number | null;
    public voiceStates: VoiceStateManager;
    public widgetChannelId: Snowflake | null;
    public widgetEnabled: boolean | null;
    public createTemplate: (name: string, description?: string) => Promise<GuildTemplate>;
    public delete: () => Promise<Guild>;
    public discoverySplashURL: (options?: ImageURLOptions) => string | null;
    public edit: (data: GuildEditData) => Promise<Guild>;
    public editWelcomeScreen: (data: WelcomeScreenEditData) => Promise<WelcomeScreen>;
    public equals: (guild: Guild) => boolean;
    public fetchAuditLogs: <T extends GuildAuditLogsResolvable = null>(
      options?: GuildAuditLogsFetchOptions<T>,
    ) => Promise<GuildAuditLogs<T>>;
    public fetchIntegrations: () => Promise<Collection<Snowflake | string, Integration>>;
    public fetchOwner: (options?: BaseFetchOptions) => Promise<GuildMember>;
    public fetchPreview: () => Promise<GuildPreview>;
    public fetchTemplates: () => Promise<Collection<GuildTemplate['code'], GuildTemplate>>;
    public fetchVanityData: () => Promise<Vanity>;
    public fetchWebhooks: () => Promise<Collection<Snowflake, Webhook>>;
    public fetchWelcomeScreen: () => Promise<WelcomeScreen>;
    public fetchWidget: () => Promise<Widget>;
    public fetchWidgetSettings: () => Promise<GuildWidgetSettings>;
    public leave: () => Promise<Guild>;
    public setAFKChannel: (afkChannel: VoiceChannelResolvable | null, reason?: string) => Promise<Guild>;
    public setAFKTimeout: (afkTimeout: number, reason?: string) => Promise<Guild>;
    public setBanner: (banner: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    public setDefaultMessageNotifications: (
      defaultMessageNotifications: GuildDefaultMessageNotifications | null,
      reason?: string,
    ) => Promise<Guild>;
    public setDiscoverySplash: (
      discoverySplash: BufferResolvable | Base64Resolvable | null,
      reason?: string,
    ) => Promise<Guild>;
    public setExplicitContentFilter: (
      explicitContentFilter: GuildExplicitContentFilter | null,
      reason?: string,
    ) => Promise<Guild>;
    public setIcon: (icon: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    public setName: (name: string, reason?: string) => Promise<Guild>;
    public setOwner: (owner: GuildMemberResolvable, reason?: string) => Promise<Guild>;
    public setPreferredLocale: (preferredLocale: Locale | null, reason?: string) => Promise<Guild>;
    public setPublicUpdatesChannel: (publicUpdatesChannel: TextChannelResolvable | null, reason?: string) => Promise<Guild>;
    public setRulesChannel: (rulesChannel: TextChannelResolvable | null, reason?: string) => Promise<Guild>;
    public setSplash: (splash: BufferResolvable | Base64Resolvable | null, reason?: string) => Promise<Guild>;
    public setSystemChannel: (systemChannel: TextChannelResolvable | null, reason?: string) => Promise<Guild>;
    public setSystemChannelFlags: (systemChannelFlags: SystemChannelFlagsResolvable, reason?: string) => Promise<Guild>;
    public setVerificationLevel: (verificationLevel: GuildVerificationLevel | null, reason?: string) => Promise<Guild>;
    public setPremiumProgressBarEnabled: (enabled?: boolean, reason?: string) => Promise<Guild>;
    public setWidgetSettings: (settings: GuildWidgetSettingsData, reason?: string) => Promise<Guild>;
    public setMFALevel: (level: GuildMFALevel, reason?: string) => Promise<Guild>;
    public toJSON: () => unknown;
    public id: string

    constructor(client: MooseClient, guild: Guild) {

        this.client = client
        this.discordGuild = guild
        this.leave = guild.leave
        this.toJSON = guild.toJSON
        this.setAFKChannel = guild.setAFKChannel
        this.setMFALevel = guild.setMFALevel
        this.setWidgetSettings = guild.setWidgetSettings
        this.setPremiumProgressBarEnabled = guild.setPremiumProgressBarEnabled
        this.setVerificationLevel = guild.setVerificationLevel
        this.setSystemChannel = guild.setSystemChannel
        this.setSystemChannelFlags = guild.setSystemChannelFlags
        this.setSplash = guild.setSplash
        this.setIcon = guild.setIcon
        this.setRulesChannel = guild.setRulesChannel
        this.setPublicUpdatesChannel = guild.setPublicUpdatesChannel
        this.setPreferredLocale = guild.setPreferredLocale
        this.setOwner = guild.setOwner
        this.setName = guild.setName
        this.setExplicitContentFilter = guild.setExplicitContentFilter
        this.setDiscoverySplash = guild.setDiscoverySplash
        this.setDefaultMessageNotifications = guild.setDefaultMessageNotifications
        this.setBanner = guild.setBanner
        this.setAFKTimeout = guild.setAFKTimeout
        this.setWidgetSettings = guild.setWidgetSettings
        this.fetchWidgetSettings = guild.fetchWidgetSettings
        this.fetchWidget = guild.fetchWidget
        this.fetchWelcomeScreen = guild.fetchWelcomeScreen
        this.fetchWebhooks = guild.fetchWebhooks
        this.fetchVanityData = guild.fetchVanityData
        this.fetchTemplates = guild.fetchTemplates
        this.fetchPreview = guild.fetchPreview
        this.fetchOwner = guild.fetchOwner
        this.fetchIntegrations = guild.fetchIntegrations
        this.fetchAuditLogs = guild.fetchAuditLogs
        this.equals = guild.equals
        this.editWelcomeScreen = guild.editWelcomeScreen
        this.edit = guild.edit
        this.afkChannelId = guild.afkChannelId
        this.afkTimeout = guild.afkTimeout
        this.applicationId = guild.applicationId
        this.approximateMemberCount = guild.approximateMemberCount
        this.approximatePresenceCount = guild.approximatePresenceCount
        this.available = guild.available
        this.bans = guild.bans
        this.channels = guild.channels
        this.commands = guild.commands
        this.defaultMessageNotifications = guild.defaultMessageNotifications
        this.discoverySplash = guild.discoverySplash
        this.emojis = guild.emojis
        this.explicitContentFilter = guild.explicitContentFilter
        this.invites = guild.invites
        this.joinedTimestamp = guild.joinedTimestamp
        this.large = guild.large
        this.maximumMembers = guild.maximumMembers
        this.maximumPresences = guild.maximumPresences
        this.memberCount = guild.memberCount
        this.members = guild.members
        this.mfaLevel = guild.mfaLevel
        this.ownerId = guild.ownerId
        this.preferredLocale = guild.preferredLocale
        this.premiumProgressBarEnabled = guild.premiumProgressBarEnabled
        this.premiumTier = guild.premiumTier
        this.presences = guild.presences
        this.publicUpdatesChannelId = guild.publicUpdatesChannelId
        this.roles = guild.roles
        this.rulesChannelId = guild.rulesChannelId
        this.scheduledEvents = guild.scheduledEvents
        this.shardId = guild.shardId
        this.stageInstances = guild.stageInstances
        this.stickers = guild.stickers
        this.systemChannelFlags = guild.systemChannelFlags
        this.systemChannelId = guild.systemChannelId
        this.vanityURLUses = guild.vanityURLUses
        this.voiceStates = guild.voiceStates
        this.widgetChannelId = guild.widgetChannelId
        this.widgetEnabled = guild.widgetEnabled
        this.id = guild.id
        this.createTemplate = guild.createTemplate
        this.delete = guild.delete
        this.discoverySplashURL = guild.discoverySplashURL


    }

    public get afkChannel(): VoiceChannel | null {
        return this.discordGuild.afkChannel
    }

    public get maximumBitrate(): number {
        return this.discordGuild.maximumBitrate
    }

    public get widgetChannel(): typeof this.discordGuild.widgetChannel | null {
        return this.discordGuild.widgetChannel
    }

    public get joinedAt(): Date {
        return this.discordGuild.joinedAt
    }

    public get voiceAdapterCreator(): InternalDiscordGatewayAdapterCreator {
        return this.discordGuild.voiceAdapterCreator
    }

    public get systemChannel(): TextChannel | null {
        return this.discordGuild.systemChannel
    }

    public get shard(): WebSocketShard {
        return this.discordGuild.shard
    }

    public get rulesChannel(): TextChannel | null {
        return this.discordGuild.rulesChannel
    }

    public get publicUpdatesChannel(): TextChannel | null {
        return this.discordGuild.publicUpdatesChannel
    }

    public get serverStats() {
        return {}
    }
}

export default MooseGuild