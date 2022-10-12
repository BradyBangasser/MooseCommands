import { AnyThreadChannel, CategoryChannel, CategoryChannelChildManager, CategoryChannelResolvable, ChannelType, Client, Collection, DMChannel, Guild, GuildChannel, GuildChannelCloneOptions, GuildChannelEditOptions, GuildMember, Message, NewsChannel, PartialDMChannel, PartialGroupDMChannel, PermissionOverwriteManager, PermissionsBitField, PrivateThreadChannel, PublicThreadChannel, Role, SetChannelPositionOptions, SetParentOptions, TextChannel, ThreadMember, User, VoiceBasedChannel, VoiceChannel } from "discord.js";
import { MooseMember, MooseRole, MooseUser } from "..";
import MooseClient from "../client";
import MooseGuild from "./guild.extentions";

class MooseChannelParent {
    public client: MooseClient;
    public type: ChannelType.GuildCategory;
    public guild: MooseGuild;
    public guildId: string;
    public name: string;
    public parentId: string | null;
    public permissionOverwrites: PermissionOverwriteManager;
    public rawPosition: number;
    public id: string;
    readonly category: CategoryChannel

    constructor(category: CategoryChannel, client: MooseClient) {
        this.client = client
        this.type = category.type
        this.guild = new MooseGuild(client, category.guild)
        this.guildId = category.guildId
        this.name = category.name
        this.parentId = category.parentId
        this.permissionOverwrites = category.permissionOverwrites
        this.rawPosition = category.rawPosition
        this.id = category.id
        this.category = category
    }
    public get children(): CategoryChannelChildManager {
        return this.category.children
    }

    public get createdAt(): Date {
        return this.category.createdAt
    }
    public get createdTimestamp(): number {
        return this.category.createdTimestamp
    }
    public get deletable(): boolean {
        return this.category.deletable
    }

    public get manageable(): boolean {
        return this.category.manageable
    }
    public get members(): Collection<string, GuildMember> {
        return this.category.members
    }
    
    public get parent(): CategoryChannel | null {
        return this.category.parent
    }

    public get permissionsLocked(): boolean | null {
        return this.category.permissionsLocked
    }
    public get position(): number {
        return this.category.position
    }
    
    public get viewable(): boolean {
        return this.category.viewable
    }

    public async delete(reason?: string | undefined): Promise<this> {
        await this.category.delete(reason)
        return this
    }

    public async edit(data: GuildChannelEditOptions): Promise<this> {
        await this.category.edit(data)
        return this
    }

    public equals(channel: GuildChannel | MooseChannelParent): boolean {
        return this.category.equals((channel instanceof GuildChannel) ? channel : channel.category)
    }
    
    public async lockPermissions(): Promise<this> {
        await this.category.lockPermissions()
        return this
    }

    public permissionsFor(memberOrRole: MooseMember | MooseRole, checkAdmin?: boolean | undefined): Readonly<PermissionsBitField>;
    public permissionsFor(memberOrRole: string | MooseMember | MooseUser | Message<boolean> | ThreadMember | Role, checkAdmin?: boolean | undefined): Readonly<PermissionsBitField> | null;
    public permissionsFor(memberOrRole: any, checkAdmin?: any): Readonly<import("discord.js").PermissionsBitField> | null {
        return this.category.permissionsFor(memberOrRole, checkAdmin)
    }

    public async setName(name: string, reason?: string | undefined): Promise<this> {
        await this.category.setName(name, reason)
        return this
    }
    public async setParent(channel: CategoryChannelResolvable | null, options?: SetParentOptions | undefined): Promise<this> {
        await this.category.setParent(channel, options)
        return this
    }
    public async setPosition(position: number, options?: SetChannelPositionOptions | undefined): Promise<this> {
        await this.category.setPosition(position, options)
        return this
    }
    public isTextBased(): this is VoiceChannel | TextChannel | NewsChannel | PublicThreadChannel | PrivateThreadChannel {
        return this.category.isTextBased()
    }
    public toString(): `<#${string}>` {
        return this.category.toString()
    }
    
    public async fetch(force?: boolean | undefined): Promise<CategoryChannel> {
        return await this.category.fetch(force)
    }
    public isThread(): this is AnyThreadChannel {
        return this.category.isThread()
    }
    public isDMBased(): this is DMChannel | PartialDMChannel | PartialGroupDMChannel {
        return this.category.isDMBased()
    }
    public isVoiceBased(): this is VoiceBasedChannel {
        return this.category.isVoiceBased()
    }
    public toJSON(...props: Record<string, string | boolean>[]): unknown {
        return this.category.toJSON(props as any)
    }
    public valueOf(): string {
        return this.category.valueOf()
    }
}

export default MooseChannelParent