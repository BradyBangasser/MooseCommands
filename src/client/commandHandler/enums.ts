import { SlashCommandAttachmentOption, SlashCommandBooleanOption, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandRoleOption, SlashCommandStringOption, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder, SlashCommandUserOption } from "discord.js";

enum SlashCommandTypesEnum {
    "int" = "addIntegerOption",
    "number" = "addNumberOption",
    "float" = "addNumberOption",
    "double" = "addNumberOption",
    "integer" = "addIntegerOption",
    "string" = "addStringOption",
    "user" = "addUserOption",
    "boolean" = "addBooleanOption",
    "subcommand" = "addSubcommand",
    "subcommandgroup" = "addSubcommandGroup",
    "channel" = "addChannelOption",
    "mentionable" = "addMentionableOption",
    "role" = "addRoleOption",
    "attachment" = "addAttachmentOption"
}

const SlashCommandOptionClassesEnum = {
    "int": SlashCommandIntegerOption,
    "number": SlashCommandNumberOption,
    "float": SlashCommandNumberOption,
    "double": SlashCommandNumberOption,
    "integer": SlashCommandIntegerOption,
    "string": SlashCommandStringOption,
    "user": SlashCommandUserOption,
    "boolean": SlashCommandBooleanOption,
    "subcommand": SlashCommandSubcommandBuilder,
    "subcommandgroup": SlashCommandSubcommandGroupBuilder,
    "channel": SlashCommandChannelOption,
    "mentionable": SlashCommandMentionableOption,
    "role": SlashCommandRoleOption,
    "attachment": SlashCommandAttachmentOption
}

new SlashCommandOptionClassesEnum.string().addChoices

export { SlashCommandTypesEnum, SlashCommandOptionClassesEnum }