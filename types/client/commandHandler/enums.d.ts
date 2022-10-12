import { SlashCommandAttachmentOption, SlashCommandBooleanOption, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandRoleOption, SlashCommandStringOption, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder, SlashCommandUserOption } from "discord.js";
declare enum SlashCommandTypesEnum {
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
declare const SlashCommandOptionClassesEnum: {
    int: typeof SlashCommandIntegerOption;
    number: typeof SlashCommandNumberOption;
    float: typeof SlashCommandNumberOption;
    double: typeof SlashCommandNumberOption;
    integer: typeof SlashCommandIntegerOption;
    string: typeof SlashCommandStringOption;
    user: typeof SlashCommandUserOption;
    boolean: typeof SlashCommandBooleanOption;
    subcommand: typeof SlashCommandSubcommandBuilder;
    subcommandgroup: typeof SlashCommandSubcommandGroupBuilder;
    channel: typeof SlashCommandChannelOption;
    mentionable: typeof SlashCommandMentionableOption;
    role: typeof SlashCommandRoleOption;
    attachment: typeof SlashCommandAttachmentOption;
};
export { SlashCommandTypesEnum, SlashCommandOptionClassesEnum };
