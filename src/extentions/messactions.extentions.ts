import { ActionRow, AnyThreadChannel, Attachment, AwaitMessageCollectorOptionsParams, AwaitReactionsOptions, ClientApplication, Collection, CommandInteraction, Embed, EmojiIdentifierResolvable, Guild, GuildMember, GuildTextBasedChannel, If, Interaction, InteractionReplyOptions, InteractionType, MappedInteractionTypes, Message, MessageActionRowComponent, MessageActivity, MessageCollectorOptionsParams, MessageComponentType, MessageEditOptions, MessageFlagsBitField, MessageInteraction, MessageMentions, MessagePayload, MessageReaction, MessageReference, MessageType, ReactionCollector, ReactionCollectorOptions, ReactionManager, BaseMessageOptions, Snowflake, StartThreadOptions, Sticker, TextBasedChannel, User } from "discord.js"
import DisCrackClient from "../client";

class MessActions {
    private _message: Message | CommandInteraction
    private _client: DisCrackClient
    public inputType: "interaction" | "message"
    public activity: MessageActivity | null;
    public applicationId: Snowflake | null;
    public attachments: Collection<Snowflake, Attachment>;
    public author: User;
    public channelId: Snowflake;
    public components: ActionRow<MessageActionRowComponent>[];
    public content: string;
    public createdTimestamp: number;
    public editedTimestamp: number | null;
    public embeds: Embed[];
    public groupActivityApplication: ClientApplication | null;
    public guildId: If<boolean, Snowflake>;
    public id: Snowflake;
    public interaction: MessageInteraction | null;
    public mentions: MessageMentions;
    public nonce: string | number | null;
    public pinned: boolean;
    public reactions: ReactionManager;
    public stickers: Collection<Snowflake, Sticker>;
    public system: boolean;
    public tts: boolean;
    public type: MessageType | InteractionType.ApplicationCommand;
    public webhookId: Snowflake | null;
    public flags: Readonly<MessageFlagsBitField>;
    public inGuild: boolean;

    /**
     * A combination and extention of discord.js's Message and CommandInteraction
     * @param {Message | CommandInteraction} message discord.js Objects
     * @param {DisCrackClient} client DisCrack's Client
     */

    constructor(message: Message | CommandInteraction, client: DisCrackClient) {
        this._message = message
        this._client = client

        if ((message as Message).pin) {
            this.inputType = "message"
            message = message as Message
        } else {
            this.inputType = "interaction"
            message = message as CommandInteraction
        }

        this.inGuild = message.inGuild()
        this.flags = (message as Message).flags ?? false
        this.webhookId = (message as Message).webhookId ?? (message as CommandInteraction).webhook.id
        this.type = message.type
        this.tts = (message as Message).tts ?? false
        this.system = (message as Message).system ?? false
        this.stickers = (message as Message).stickers ?? new Collection()
        this.reactions = (message as Message).reactions ?? null
        this.pinned = (message as Message).pinned ?? false
        this.nonce = (message as Message).nonce ?? 1
        this.mentions = (message as Message).mentions ?? this.checkMentions((message as CommandInteraction).options.data.toString())
        this.interaction = (message as Message).interaction ?? { id: message.id, type: message.type, commandName: (message as CommandInteraction).commandName, user: (message as CommandInteraction).user } as MessageInteraction
        this.id = message.id
        this.guildId = message.guildId
        this.groupActivityApplication = (message as Message).groupActivityApplication ?? null
        this.embeds = (message as Message).embeds ?? []
        this.editedTimestamp = (message as Message).editedTimestamp ?? (message as CommandInteraction).createdTimestamp
        this.createdTimestamp = message.createdTimestamp
        this.activity = (message as Message).activity ?? null
        this.content = (message as Message).content ?? "" // Change this to get the content of the interaction
        this.components = (message as Message).components ?? [] // Change this
        this.channelId = message.channelId
        this.author = (message as Message).author ?? (message as CommandInteraction).user
        this.attachments = (message as Message).attachments ?? new Collection()
        this.applicationId = message.applicationId
    }

    private checkMentions(content: string) {
        
    }

    public unpin(reason?: string) {
        if (this.inputType === "interaction") return false
        try {
            const unpin = (this._message as Message).unpin(reason)
            this._client.emit("messageUnpin", this)
            return unpin
        } catch(err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public toString() {
        return this._message.toString()
    }

    public toJSON() {
        this._message.toJSON()
    }

    public suppressEmbeds(suppress?: boolean) {
        if (this.inputType === "interaction") return false
        return (this._message as Message).suppressEmbeds(suppress)
    }

    public startThread(options: StartThreadOptions) {
        if (this.inputType === "interaction") return false
        try {
            return (this._message as Message).startThread(options)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public resolveComponent(customId: string) {
        if (this.inputType === "interaction") return false
        try {
            return (this._message as Message).resolveComponent(customId)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public reply(options: string | MessagePayload | BaseMessageOptions | InteractionReplyOptions) {
        try {
            if (!(options as MessagePayload).body && typeof options !== "string") {
                options = { ...options } as any
            }
            return this._message.reply(options as { [key: string]: any })
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public removeAttachments() {
        if (this.inputType === "interaction") return false
        try {
            return (this._message as Message).removeAttachments()
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public react(emoji: EmojiIdentifierResolvable) {
        if (this.inputType === "interaction") return false
        
        try {
            return (this._message as Message).react(emoji)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public pin(reason?: string) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).pin(reason)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public fetch(force?: boolean) {
        if (this.inputType === "interaction") return this._message

        try {
            return (this._message as Message).fetch(force)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public crosspost() {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).crosspost()
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public fetchWebhook() {
        if (this.inputType === "interaction") return (this._message as CommandInteraction).webhook

        try {
            return (this._message as Message).fetchWebhook()
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public fetchReference() {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).fetchReference()
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public equals(message: Message, rawData: unknown) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).equals(message, rawData)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public edit(content: string | MessageEditOptions | MessagePayload) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).edit(content)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public delete() {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).delete()
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public createMessageComponentCollector<T extends MessageComponentType>(options?: MessageCollectorOptionsParams<T>,) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).createMessageComponentCollector<T>(options)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public createReactionCollector(options?: ReactionCollectorOptions) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).createReactionCollector(options)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public awaitReactions(options?: AwaitReactionsOptions) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).awaitReactions(options)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public awaitMessageComponent<T extends MessageComponentType>(options?: AwaitMessageCollectorOptionsParams<T>) {
        if (this.inputType === "interaction") return false

        try {
            return (this._message as Message).awaitMessageComponent<T>(options)
        } catch (err) {
            this._client.emit("messageError", err, this)
            return false
        }
    }

    public get url() {
        if (this.inputType === "interaction") return undefined

        return (this._message as Message).url
    }

    public get thread() {
        if (this.inputType === "interaction") return undefined

        return (this._message as Message).thread
    }

    public get partial() {
        if (this.inputType === "interaction") return undefined

        return (this._message as Message).partial
    }

    public get pinnable() {
        if (this.inputType === "interaction") return false

        return (this._message as Message).pinnable
    }

    public get member() {
        return this._message.member
    }

    public get guild() {
        return this._message.guild
    }
    public get hasThread() {
        if (this.inputType === "interaction") return false

        return (this._message as Message).hasThread
    }

    public get crosspostable() {
        if (this.inputType === "interaction") return false

        return (this._message as Message).crosspostable
    }

    public get deletable() {
        if (this.inputType === "interaction") return false

        return (this._message as Message).deletable
    }

    public get editable() {
        if (this.inputType === "interaction") return false

        return (this._message as Message).editable
    }

    public get editedAt() {
        return (this._message as Message).editedAt ?? this._message.createdAt
    }

    public get createdAt() {
        return this._message.createdAt
    }

    public get cleanContent() {
        if (this.inputType === "interaction") return undefined

        return (this._message as Message).cleanContent
    }

    public get channel() {
        return this._message.channel
    }

    public get reference() {
        return (this.inputType === "interaction") ? { 
            channelId: (this._message as CommandInteraction).channelId,
            guildId: (this._message as CommandInteraction).guildId,
            messageId: (this._message as CommandInteraction).id,
        } as MessageReference : (this._message as Message).reference
    }
}

export default MessActions