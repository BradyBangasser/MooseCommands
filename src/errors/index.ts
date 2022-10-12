import { Condition, MooseErrorOptions, MooseChannel, MooseGuild, MooseMember, MooseUser, ErrorEvents, ErrorType, MessActions } from "..";
import DisCrackClient from "../client";
import { Arrayify } from "../functions";
import settings from "../settings";

class ErrorHandler {
    private _client: DisCrackClient
    readonly options: MooseErrorOptions

    constructor(client: DisCrackClient, options: MooseErrorOptions | boolean) {
        this._client = client

        if (!options) this.options = settings.errors.disabled
        if (options === true || typeof options !== "object") this.options = settings.errors.defaultSettings as MooseErrorOptions
        else this.options = { ...settings.errors.defaultSettings, ...options as MooseErrorOptions } as MooseErrorOptions
        this.setUpListeners()
    }

    public errorHandler(err: ErrorType) {

    }

    public shardErrorHandler(err: ErrorType, shardNum: number) {

    }

    public commandErrorHandler(err: ErrorType, interactions: MessActions, server: MooseGuild, channel: MooseChannel, member: MooseMember) {

    }

    private setUpListeners() {
        this._client.on("error", this.errorHandler)
        this._client.on("shardError", this.shardErrorHandler)
    }

    public tryToThrow(err: Error, eventName: string, typeOfError: ErrorEvents) {
        
    }

    private conditioner(typeOfError: ErrorEvents) {
        const falseConditions: Condition[] = [
            {
                error: "all",
                cases: Arrayify({
                    errorSystem: false,
                    keepBotRunning: false,

                } as MooseErrorOptions)
            }, {
                error: "all",
                cases: Arrayify({
                    errorSystem: false,
                    keepBotRunning: false,

                } as MooseErrorOptions)
            },
        ]

       for (const condition of falseConditions) {
            if (condition.error.toLowerCase() === typeOfError.toLowerCase()) {
                if (JSON.stringify(this.options) === JSON.stringify({ ...this.options, ...condition.cases })) return false
            }
        }

        return true
    }
}

export default ErrorHandler