import { Base64Resolvable, BufferResolvable, Collection, ColorResolvable, EditRoleOptions, EmojiResolvable, Guild, GuildMember, HexColorString, ImageURLOptions, NonThreadGuildBasedChannel, PermissionResolvable, PermissionsBitField, Role, RoleMention, RoleResolvable, RoleTagData, SetRolePositionOptions, Snowflake } from "discord.js";
import DisCrackClient from "../client";
import { MooseDatabaseError } from "./error.extentions";

class DisCrackRole {
    readonly discordRole: Role
    public color: number;
    public guild: Guild;
    public hoist: boolean;
    public id: Snowflake;
    public managed: boolean;
    public mentionable: boolean;
    public name: string;
    public permissions: Readonly<PermissionsBitField>;
    public rawPosition: number;
    public tags: RoleTagData | null;
    public comparePositionTo: ((role: RoleResolvable) => number);
    public icon: string | null;
    public unicodeEmoji: string | null;
    public delete: (reason?: string) => Promise<Role>;
    public edit: (data: EditRoleOptions) => Promise<Role>;
    public equals: (role: Role) => boolean;
    public iconURL: (options?: ImageURLOptions) => string | null;
    public permissionsIn: (
      channel: NonThreadGuildBasedChannel | Snowflake,
      checkAdmin?: boolean,
    ) => Readonly<PermissionsBitField>;
    public setColor: (color: ColorResolvable, reason?: string) => Promise<Role>;
    public setHoist: (hoist?: boolean, reason?: string) => Promise<Role>;
    public setMentionable: (mentionable?: boolean, reason?: string) => Promise<Role>;
    public setName: (name: string, reason?: string) => Promise<Role>;
    public setPermissions: (permissions: PermissionResolvable, reason?: string) => Promise<Role>;
    public setIcon: (icon: BufferResolvable | Base64Resolvable | EmojiResolvable | null, reason?: string) => Promise<Role>;
    public setPosition: (position: number, options?: SetRolePositionOptions) => Promise<Role>;
    public setUnicodeEmoji: (unicodeEmoji: string | null, reason?: string) => Promise<Role>;
    public toJSON: () => unknown;
    public toString: () => RoleMention;
    private _adminRole!: boolean
    private _modRole!: boolean
    private _mutedRole!: boolean
    private _ownerRole!: boolean
    private _client: DisCrackClient

    constructor(client: DisCrackClient, role: Role) {
        this.discordRole = role
        this.color = role.color
        this.guild = role.guild
        this.hoist = role.hoist
        this.name = role.name
        this.id = role.id
        this.managed = role.managed
        this.mentionable = role.mentionable
        this.permissions = role.permissions
        this.rawPosition = role.rawPosition
        this.tags = role.tags
        this.comparePositionTo = role.comparePositionTo
        this.icon = role.icon
        this.unicodeEmoji = role.unicodeEmoji
        this.delete = role.delete
        this.edit = role.edit
        this.equals = role.equals
        this.iconURL = role.iconURL
        this.permissionsIn = role.permissionsIn
        this.setColor = role.setColor
        this.setHoist = role.setHoist
        this.setMentionable = role.setMentionable
        this.setName = role.setName
        this.setPermissions = role.setPermissions
        this.setIcon = role.setIcon
        this.setPosition = role.setPosition
        this.setUnicodeEmoji = role.setUnicodeEmoji
        this.toJSON = role.toJSON
        this.toString = role.toString
        this._client = client
    }

    public get members() {
        return this.discordRole.members
    }

    public get editable() {
        return this.discordRole.editable
    }

    public get hexColor() {
        return this.discordRole.hexColor
    }

    public get position() {
        return this.discordRole.position
    }

    public get createdAt() {
        return this.discordRole.createdAt
    }

    public get createdTimestamp() {
        return this.discordRole.createdTimestamp
    }

    public set modRole(value: boolean) {
        if (typeof this._client.db === "undefined") throw new MooseDatabaseError(this._client, "No Database connected, cannot set or get mod roles")
        this._modRole = value
    }
}