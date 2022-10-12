import path from "path";
import DisCrackClient from "..";
import { CommandRunArgs } from "../..";
import { getFiles, isNewable } from "../../functions";
import CommandBase from "./commandBase";

class CommandHandler {
    private _client: DisCrackClient
    private _commands: Map<string, CommandBase> = new Map<string, CommandBase>()
    private _defaultCommand?: CommandBase
    private _slashCommandData: { [key: string]: unknown} = {}

    constructor(client: DisCrackClient) {
        this._client = client
    }

    public async exec(args: CommandRunArgs, command: string) {
        
    }

    public async init() {
        const files = getFiles(this._client.commandDir)
        for (const [filePath, fileName] of files) {
            let fileContent = await import(path.join(process.cwd(), this._client.commandDir, filePath))

            if (!isNewable(fileContent)) throw new Error()
            fileContent = new fileContent()

            if (!(fileContent instanceof CommandBase)) throw new SyntaxError("Commands must extend the BaseCommand class")

            this._registerCommand([fileContent.name, fileName, ...fileContent.aliases], fileContent)
        }

        return this
    }

    private _registerCommand(aliases: string[], command: CommandBase) {
        if (command.unknown && typeof this._defaultCommand === "undefined") this._defaultCommand = command

        aliases.forEach(alias => {
            if (this._commands.get(alias)) throw new Error(`Duplicate command name detected, ${alias}(Command: ${command.name}) already exists on the ${(this._commands.get(alias) as CommandBase).name}`);

            this._commands.set(alias, command)
        })

        if (command.slash) {
            
        }
    }

    public async trigger() {
        this._client.on("messageCreate", async (message) => {
            
        })

        this._client.on("interactionCreate", async (interaction) => {

        })
    }

    private async _registerSlashCommands() {

    }

    private async _createCommandData() {

    }
}