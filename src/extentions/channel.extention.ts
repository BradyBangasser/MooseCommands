import { AllowedThreadTypeForTextChannel, AwaitMessageCollectorOptionsParams, AwaitMessageComponentOptions, AwaitMessagesOptions, BaseChannel, BitField, BitFieldResolvable, CacheType, CategoryChannelResolvable, Channel, ChannelType, CollectedMessageInteraction, Collection, CreateInviteOptions, DMChannel, GuildChannelCloneOptions, GuildTextChannelType, Message, MessageCollectorOptions, MessageCollectorOptionsParams, MessageComponentCollectorOptions, MessageComponentType, MessageManager, BaseMessageOptions, MessagePayload, MessageResolvable, NewsChannel, PartialGroupDMChannel, PermissionOverwriteManager, SetChannelPositionOptions, SetParentOptions, Snowflake, SystemChannelFlagsBitField, TextChannel, ThreadAutoArchiveDuration, WebhookCreateOptions } from "discord.js";
import MooseClient from "../client";
import MooseCache from "../client/cache";
import MooseGuild from "./guild.extentions";

class MooseChannel {
    readonly channel: Channel
    readonly client: MooseClient
    readonly guild?: MooseGuild
    readonly guildId?: string
    readonly createdAt: Date | null
    readonly createdTimestamp: number | null
    readonly id: Snowflake
    readonly partial: boolean
    readonly url: string
    private _cache = new MooseCache.MicroCache()

    constructor(client: MooseClient, channel: Channel) {
        this.channel = channel
        this.client = client
        this.createdAt = channel.createdAt
        this.createdTimestamp = channel.createdTimestamp
        this.id = channel.id
        this.partial = channel.partial
        this.url = channel.url

        
        if (!(channel instanceof DMChannel || channel instanceof PartialGroupDMChannel)) {
            this.guild = new MooseGuild(client, (channel as TextChannel).guild)
            this.guild.id
        }
    }

    public get deleteable(): boolean | undefined {
        return (this.channel as TextChannel).deletable
    }

    public get flags() {
        return (this.channel as any).flags
    }

    public get lastMessage() {
        throw new Error("Change to return moosemessage")
        return (this.channel as TextChannel).lastMessage
    }

    public get lastMessageId() {
        return (this.channel as TextChannel).lastMessageId
    }

    public get lastPinAt() {
        return (this.channel as TextChannel).lastPinAt
    }

    public get lastPinTimestamp() {
        return (this.channel as TextChannel).lastPinTimestamp
    }

    public get manageable() {
        return (this.channel as TextChannel).manageable
    }

    public get members() {
        return (this.channel as TextChannel).members
    }

    public get messages(): MessageManager | undefined {
        return (this.channel as TextChannel).messages
    }

    public get name(): string | undefined {
        return (this.channel as TextChannel).name
    }

    public get nsfw(): boolean | undefined {
        return (this.channel as TextChannel).nsfw
    }

    public get defaultAutoArchiveDuration(): ThreadAutoArchiveDuration | undefined {
        return (this.channel as TextChannel).defaultAutoArchiveDuration
    }

    public get permissionsOverwrite(): PermissionOverwriteManager | undefined {
        return (this.channel as TextChannel).permissionOverwrites
    }

    public get permissionsLocked(): boolean| null | undefined {
        return (this.channel as TextChannel).permissionsLocked
    }

    public get position(): number | undefined {
        return (this.channel as TextChannel).position
    }

    public get rateLimitPerUser(): number | undefined {
        return (this.channel as TextChannel).rateLimitPerUser
    }

    public get rawPosition() {
        return (this.channel as TextChannel).rawPosition
    }

    public get threads() {
        return (this.channel as TextChannel).threads
    }

    public get topic() {
        return (this.channel as TextChannel).topic
    }

    public get type() {
        return this.channel.type
    }

    public get viewable() {
        return (this.channel as TextChannel).viewable
    }

    public async delete(reason?: string) {
        return await this.channel.delete(reason)
    }

    public async fetch(force: boolean) {
        return await this.channel.fetch(force)
    }

    public isDMBased() {
        return this._cache.cacheResults<boolean>("isDMBased", this.channel.isDMBased, {})
    }

    public isTextBased() {
        return this._cache.cacheResults<boolean>("isTextBased", this.channel.isTextBased, {})
    }

    public isThread() {
        return this._cache.cacheResults<boolean>("isThread", this.channel.isThread, {})
    }

    public isVoiceBased() {
        return this._cache.cacheResults<boolean>("isVoiceBased", this.channel.isVoiceBased, {})
    }

    public async awaitMessageComponent<T extends MessageComponentType>(options?: AwaitMessageCollectorOptionsParams<T, true>) {
        if (typeof (this.channel as TextChannel).awaitMessageComponent !== "function") return undefined
        return await (this.channel as TextChannel).awaitMessageComponent<T>(options)
    }

    public async awaitMessages(options?: AwaitMessagesOptions) {
        if (typeof (this.channel as TextChannel).awaitMessages !== "function") return undefined
        return await (this.channel as TextChannel).awaitMessages(options)
    }

    public async bulkDelete(messages: number | Collection<Snowflake, Message> | Array<MessageResolvable>, filterOld: boolean = false): Promise<Collection<Snowflake, Message | undefined>> {
        return await this.bulkDelete(messages, filterOld)
    }

    public async clone(options?: GuildChannelCloneOptions) {
        if (typeof (this.channel as TextChannel).clone !== "function") return undefined
        return await (this.channel as TextChannel).clone(options)
    }

    public async createInvite(options?: CreateInviteOptions) {
        if (typeof (this.channel as TextChannel).createInvite !== "function") return undefined
        return await (this.channel as TextChannel).createInvite(options)
    }

    public createMessageCollector(options?: MessageCollectorOptions) {
        if (typeof (this.channel as TextChannel).createMessageCollector !== "function") return undefined
        return (this.channel as TextChannel).createMessageCollector(options)
    }

    public createMessageComponentCollector<T extends MessageComponentType>(options?: MessageCollectorOptionsParams<T, true>) {
        if (typeof (this.channel as TextChannel).createMessageComponentCollector !== "function") return undefined
        return (this.channel as TextChannel).createMessageComponentCollector(options)
    }

    public async createWebhook(options: WebhookCreateOptions) {
        if (typeof (this.channel as TextChannel).createWebhook !== "function") return undefined
        return await (this.channel as TextChannel).createWebhook(options)
    }

    public async fetchInvites(cache: boolean = true) {
        if (typeof (this.channel as TextChannel).fetchInvites !== "function") return undefined
        return await (this.channel as TextChannel).fetchInvites(cache)
    }

    public async fetchWebhooks() {
        if (typeof (this.channel as TextChannel).fetchWebhooks !== "function") return undefined
        return await (this.channel as TextChannel).fetchWebhooks()
    }

    public async send(options: string | MessagePayload | BaseMessageOptions) {
        if (typeof (this.channel as TextChannel).send !== "function") return undefined
        return await (this.channel as TextChannel).send(options)
    }

    public async sendTyping() {
        if (typeof (this.channel as TextChannel).sendTyping !== "function") return undefined
        return await (this.channel as TextChannel).sendTyping()
    }

    public async setName(name: string, reason?: string) {
        if (typeof (this.channel as TextChannel).setName !== "function") return undefined
        return new MooseChannel(this.client, await (this.channel as TextChannel).setName(name, reason))
    }

    public async setNFSW(nsfw: boolean = true, reason?: string) {
        if (typeof (this.channel as TextChannel).setNSFW !== "function") return undefined
        await (this.channel as TextChannel).setNSFW(nsfw, reason)
        return this
    }

    public async setParent(channel: CategoryChannelResolvable, options?: SetParentOptions) {
        if (typeof (this.channel as TextChannel).setParent !== "function") return undefined
        await (this.channel as TextChannel).setParent(channel, options)
        return this
    }

    public async setPosition(position: number, options: SetChannelPositionOptions) {
        if (typeof (this.channel as TextChannel).setPosition !== "function") return undefined
        await (this.channel as TextChannel).setPosition(position, options)
        return this
    }

    public async setRateLimitPerUser(rateLimitPerUser: number, reason?: string) {
        if (typeof (this.channel as TextChannel).setRateLimitPerUser !== "function") return undefined
        await (this.channel as TextChannel).setRateLimitPerUser(rateLimitPerUser, reason)
        return this
    }

    public async setSlowMode(ms: number, reason?: string) {
        if (typeof (this.channel as TextChannel).setRateLimitPerUser !== "function") return undefined
        await (this.channel as TextChannel).setRateLimitPerUser(ms, reason)
        return this
    }

    public async setTopic(topic: string, reason?: string) {
        if (typeof (this.channel as TextChannel).setTopic !== "function") return undefined
        await (this.channel as TextChannel).setTopic(topic, reason)
        return this
    }

    public async setType(type: ChannelType.GuildNews | ChannelType.GuildText, reason?: string) {
        if (typeof (this.channel as TextChannel).setType !== "function") return undefined

        // @ts-expect-error

        await (this.channel as TextChannel).setType(type, reason)
        return this
    }

    public toString() {
        return this.channel.toString()
    }
}

export default MooseChannel