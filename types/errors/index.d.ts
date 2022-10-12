import { CrackErrorOptions, DisCrackChannel, MooseGuild, DisCrackMember, ErrorEvents, ErrorType, MessActions } from "..";
import DisCrackClient from "../client";
declare class ErrorHandler {
    private _client;
    readonly options: CrackErrorOptions;
    constructor(client: DisCrackClient, options: CrackErrorOptions | boolean);
    errorHandler(err: ErrorType): void;
    shardErrorHandler(err: ErrorType, shardNum: number): void;
    commandErrorHandler(err: ErrorType, interactions: MessActions, server: MooseGuild, channel: DisCrackChannel, member: DisCrackMember): void;
    private setUpListeners;
    tryToThrow(err: Error, eventName: string, typeOfError: ErrorEvents): void;
    private conditioner;
}
export default ErrorHandler;
