import { toEditorSettings } from "typescript"
import { CommandFormat, CommandObjectFormat, CommandOptionChoiceType, CommandSubOptions, MooseErrorOptions } from "."

class Settings {
    public static noReason = "No Reason Required"

    public static noDescription = "No Description"

    public static errors = {
        defaultSettings: {
            errorSystem: true,
            handleDefault: true,
            handleMoose: true,
            emitOnError: true,
            emitOnMooseError: true,
            emitOnDiscordError: true,
            keepBotRunning: true,
            errorHandling: "default",
            shardErrorHandling: "default",
            customErrors: [],
            log: "error"
        },
        disabled: {
            errorSystem: false
        },
    }
    public errors = Settings.errors

    public static characters = {
        special: "!@#$%^&*()-=_+`~,./<>?;':\"[]\\|}{",
        lower: "qwertyuiopasdfghjklzxcvbnm",
        upper: "QWERTYUIOPLKJHGFDSAMNBVCXZ",
        number: "1234567890"
    }
    public characters = Settings.characters

    public static regex = {
        commandReplacer: /\s/i
    }
    public regex = Settings.regex

    public static command = {
        defaultEphemeral: false,
        dmOnlyDefault: false,
        defaultHidden: false,
        defaultOwnerOnly: false,
        defaultGuarded: false,
        defaultChannelOnly: false,
        defaultArgStyle: "multiple",
        argStyleArray: ["string", "single", "multiple", "array", "list"] as const,
        defaultCacheResult: false,
        defaultNSFW: true,
        defaultNSFWOnly: false,
        defaultRest: true,
        defaultAdminOnly: false,
        defaultModOnly: false,
        defaultAllowExtraArgs: true,
        defaultInteractions: true,
        defaultArgSplitter: " ",
        defaultLastRunBy: 10,
        defaultAutoAlias: true,
        defaultCapsSensitive: true,
        defaultTestOnly: false,
        defaultSlash: true,
        defaultCommandOptions: {
            description: Settings.noDescription,
            options: [] as CommandSubOptions[]
        },
        defaultCommndSubOption: {
            choices: [] as CommandOptionChoiceType[],
            autocomplete: true,
            required: true
        } as CommandSubOptions
    }
    public command = Settings.command

    public static constants = {
        speedOfSound: new Number(767),
        regex: {
            numberStringFormat: /([\d].?[/w])/gi,
            mongoURIRegex: /((mongodb\+srv)|(mongodb)):\/\/([a-zA-Z0-9%_\.-])*:([a-zA-Z0-9%_\.-])*(@([a-zA-Z0-9%_\.-])*)(:\d{4})?\/(([a-zA-Z0-9%_\.-])*)/g,
        }
    }
    public constants = Settings.constants

    public static physics = {
        defaultGravityConstant: 6,
        speed: (distance: number, time: number) => distance / time,
        distance: (speed: number, time: number) => speed * time,
        time: (distance: number, speed: number) => distance / speed,
        forceOfGravity: function(unit?: number) {
            
        },

        aeronautics: {
            calculateWingLoading: (weight: number, wingArea: number) => weight / wingArea,
            calculateLiftCoefficent,
            calculateLiftForce: (liftCoefficent: number, fluidDensity: number, fluidVelocity: number, area: number) => liftCoefficent * ((fluidDensity * (fluidVelocity * fluidDensity)) / 2) * area
        }
    }
}

function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, fluidDynamicPressure: number): number
function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, fluidDensity: number, fluidVelocity: number): number
function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, pressureDensity: number, velocity?: number) {
    let cL: number

    if (typeof velocity !== "number") cL = liftForce / (relevantSurfaceArea * pressureDensity)
    else cL = (2 * liftForce) / (pressureDensity * (velocity * velocity) * relevantSurfaceArea)

    return cL
}

export default Settings