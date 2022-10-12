import { MooseLoggerOptions, MooseLoggerStyles, Priority, RGBColorObject } from ".";
import MooseClient from "./client";
import figlet from "figlet";
import chalk, { Color, Modifiers } from "chalk";
import EventEmitter from "events";

enum PriorityColors {
    high = "#FF0000",
    med = "#FFFF00",
    low = "#00ff00",
    none = "visible"
}

class MooseLogger {

    private _options: MooseLoggerOptions
    private _client: MooseClient

    constructor(client: MooseClient, options: MooseLoggerOptions) {
        this._options = options
        this._client = client
    }

    public log(text: string, priority: Priority = "none", style: MooseLoggerStyles = this._options) {

        let newValue: string | undefined = text

        if (style.box) {

            newValue = figlet.textSync(newValue, style)
        }

        if (style.color || priority !== "none") {

            if (priority !== "none" && !style.color) {
                style.color = PriorityColors[priority]
            }

            let options: { [key: string]: any } = {
                modifiers: style.fontStyles
            }

            if (Array.isArray(style.color)) {
                if (style.color.length !== 3) style.color = [...style.color, ...[0, 0, 0]].slice(0, 3) as [number, number, number]

                style.color.forEach((value, index) => {
                    if (value > 255 || value < 0) throw new SyntaxError(`RGB value at index ${index} is invalid.`)
                })

                options.rgb = style.color
            } else if (typeof style.color === "object") {
                options.rgb = {
                    red: (style.color as { [key: string]: number }).red ?? (style.color as { [key: string]: number }).r,
                    green: (style.color as { [key: string]: number }).green ?? (style.color as { [key: string]: number }).g,
                    blue: (style.color as { [key: string]: number }).blue ?? (style.color as { [key: string]: number }).b,
                }
            } else if ((style.color as string).match(/#?([A-Z0-9]{5,6})/gi) != null) {
                options.hex = ((style.color as string).match(/#?([A-Z0-9]{5,6})/gi) as RegExpMatchArray)[0]
            } else options.color = style.color

            newValue = this.chalkIt(newValue, options)
        }

        return this._res(newValue, style)
    }

    private _res(text: string, style: MooseLoggerStyles) {
        if (style.return === true) return text
        else return console.log(text)
    }

    public chalkIt(text: string, { color, modifiers, hex, rgb }: { color?: Color, modifiers?: Modifiers | Modifiers[], hex?: string, rgb?: [number, number, number] | RGBColorObject }) {
        const chalkClient = new this._client.chalkClass((this._client.performance === "high") ? 2 : 3)

        if (color) text = chalkClient[color](text)
        else if (hex) text = chalkClient.hex(hex)(text)
        else if (rgb) {
            if (Array.isArray(rgb)) text = chalkClient.rgb(...rgb)(text)
            else {
                const rgbo = rgb as { [key: string]: any }

                text = chalkClient.rgb(rgbo.r ?? rgbo.red, rgbo.g ?? rgbo.green, rgbo.b ?? rgbo.blue)(text)
            }
        }

        if (modifiers) {
            modifiers = (Array.isArray(modifiers) ? modifiers : [modifiers])
            modifiers.forEach((mod) => {
                text = chalkClient[mod](text)
            })
        }

        return text
    }
}

export default MooseLogger