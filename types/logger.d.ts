import { MooseLoggerOptions, MooseLoggerStyles, Priority, RGBColorObject } from ".";
import MooseClient from "./client";
import { Color, Modifiers } from "chalk";
declare class MooseLogger {
    private _options;
    private _client;
    constructor(client: MooseClient, options: MooseLoggerOptions);
    log(text: string, priority?: Priority, style?: MooseLoggerStyles): string | void;
    private _res;
    chalkIt(text: string, { color, modifiers, hex, rgb }: {
        color?: Color;
        modifiers?: Modifiers | Modifiers[];
        hex?: string;
        rgb?: [number, number, number] | RGBColorObject;
    }): string;
}
export default MooseLogger;
