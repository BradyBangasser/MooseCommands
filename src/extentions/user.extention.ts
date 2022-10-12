import { Client, DMChannel, ImageURLOptions, Message, MessagePayload, User, UserFlagsBitField } from "discord.js";
import MooseClient, { MooseMember, MooseGuild } from "..";

class DisCrackUser {

    public accentColor: number | null | undefined;
    private _member?: MooseMember;
    public avatar: string | null;
    public banner: string | null | undefined;
    public bot: boolean;
    public discriminator: string;
    readonly user: User;
    readonly id: string;
    public flags: Readonly<UserFlagsBitField> | null;
    public system: boolean;
    public username: string;
    readonly client: MooseClient<boolean>;
    public avatarURL: User["avatarURL"]
    public bannerURL: User["bannerURL"]
    public createDM: User["createDM"]
    public deleteDM: User["deleteDM"]
    public displayAvatarURL: User["displayAvatarURL"]
    public equals: User["equals"]
    public fetch: User["fetch"]
    public fetchFlags: User["fetchFlags"]
    public toString: User["toString"]
    public toJSON: User["toJSON"]
    public valueOf: User["valueOf"]
    public send: User["send"]

    constructor(user: User, client: MooseClient, member?: MooseMember) {
        this.user = user;
        this.accentColor = user.accentColor;
        this._member = member;
        this.avatar = user.avatar
        this.bot = user.bot
        this.discriminator = user.discriminator
        this.id = user.id;
        this.flags = user.flags
        this.system = user.system
        this.username = user.username
        this.client = client
        this.avatarURL = user.avatarURL
        this.bannerURL = user.bannerURL
        this.createDM = user.createDM
        this.deleteDM = user.deleteDM
        this.displayAvatarURL = user.displayAvatarURL
        this.equals = user.equals
        this.fetch = user.fetch
        this.fetchFlags = user.fetchFlags
        this.toString = user.toString
        this.toJSON = user.toJSON
        this.valueOf = user.valueOf
        this.send = user.send
    }

    public get createdAt(): Date {
        return this.user.createdAt
    }
    public get createdTimestamp(): number {
        return this.user.createdTimestamp
    }
    
    public get defaultAvatarURL(): string {
        return this.user.defaultAvatarURL
    }
    public get dmChannel(): DMChannel | null {
        return this.user.dmChannel
    }
    
    public get hexAccentColor(): `#${string}` | null | undefined {
        return this.user.hexAccentColor
    }
    
    public get partial(): false {
        return this.user.partial
    }
    
    public get tag(): string {
        return this.user.tag
    }

    public async getMember(serverId: string | number) {
        const server = await this.client.fetchGuild(serverId)
        if (!(server instanceof MooseGuild)) return undefined
        return await server.members.fetch(this.id)
    }
}