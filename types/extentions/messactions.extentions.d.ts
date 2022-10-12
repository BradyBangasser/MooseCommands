import { ActionRow, AnyThreadChannel, Attachment, AwaitMessageCollectorOptionsParams, AwaitReactionsOptions, ClientApplication, Collection, CommandInteraction, Embed, EmojiIdentifierResolvable, Guild, GuildMember, If, InteractionReplyOptions, InteractionType, MappedInteractionTypes, Message, MessageActionRowComponent, MessageActivity, MessageCollectorOptionsParams, MessageComponentType, MessageEditOptions, MessageFlagsBitField, MessageInteraction, MessageMentions, MessagePayload, MessageReaction, MessageReference, MessageType, ReactionCollector, ReactionCollectorOptions, ReactionManager, ReplyMessageOptions, Snowflake, StartThreadOptions, Sticker, TextBasedChannel, User } from "discord.js";
import DisCrackClient from "../client";
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
    constructor(message: Message | CommandInteraction, client: DisCrackClient);
    private checkMentions;
    unpin(reason?: string): false | Promise<Message<boolean>>;
    toString(): string;
    toJSON(): void;
    suppressEmbeds(suppress?: boolean): false | Promise<Message<boolean>>;
    startThread(options: StartThreadOptions): false | Promise<AnyThreadChannel<boolean>>;
    resolveComponent(customId: string): false | MessageActionRowComponent | null;
    reply(options: string | MessagePayload | ReplyMessageOptions | InteractionReplyOptions): false | Promise<Message<boolean>> | Promise<import("discord.js").InteractionResponse<boolean>>;
    removeAttachments(): false | Promise<Message<boolean>>;
    react(emoji: EmojiIdentifierResolvable): false | Promise<MessageReaction>;
    pin(reason?: string): false | Promise<Message<boolean>>;
    fetch(force?: boolean): false | Message<boolean> | Promise<Message<boolean>> | CommandInteraction<import("discord.js").CacheType>;
    crosspost(): false | Promise<Message<boolean>>;
    fetchWebhook(): false | import("discord.js").InteractionWebhook | Promise<import("discord.js").Webhook>;
    fetchReference(): false | Promise<Message<boolean>>;
    equals(message: Message, rawData: unknown): boolean;
    edit(content: string | MessageEditOptions | MessagePayload): false | Promise<Message<boolean>>;
    delete(): false | Promise<Message<boolean>>;
    createMessageComponentCollector<T extends MessageComponentType>(options?: MessageCollectorOptionsParams<T>): false | import("discord.js").InteractionCollector<MappedInteractionTypes<boolean>[T]>;
    createReactionCollector(options?: ReactionCollectorOptions): false | ReactionCollector;
    awaitReactions(options?: AwaitReactionsOptions): false | Promise<Collection<string, MessageReaction>>;
    awaitMessageComponent<T extends MessageComponentType>(options?: AwaitMessageCollectorOptionsParams<T>): false | Promise<MappedInteractionTypes<boolean>[T]>;
    get url(): string | undefined;
    get thread(): AnyThreadChannel<boolean> | null | undefined;
    get partial(): false | undefined;
    get pinnable(): boolean;
    get member(): import("discord.js").APIInteractionGuildMember | GuildMember | null;
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
export default MessActions;
