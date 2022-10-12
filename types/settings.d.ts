import { CommandSubOptions } from ".";
declare class Settings {
    static noReason: string;
    static noDescription: string;
    static errors: {
        defaultSettings: {
            errorSystem: boolean;
            handleDefault: boolean;
            handleMoose: boolean;
            emitOnError: boolean;
            emitOnMooseError: boolean;
            emitOnDiscordError: boolean;
            keepBotRunning: boolean;
            errorHandling: string;
            shardErrorHandling: string;
            customErrors: never[];
            log: string;
        };
        disabled: {
            errorSystem: boolean;
        };
    };
    errors: {
        defaultSettings: {
            errorSystem: boolean;
            handleDefault: boolean;
            handleMoose: boolean;
            emitOnError: boolean;
            emitOnMooseError: boolean;
            emitOnDiscordError: boolean;
            keepBotRunning: boolean;
            errorHandling: string;
            shardErrorHandling: string;
            customErrors: never[];
            log: string;
        };
        disabled: {
            errorSystem: boolean;
        };
    };
    static characters: {
        special: string;
        lower: string;
        upper: string;
        number: string;
    };
    characters: {
        special: string;
        lower: string;
        upper: string;
        number: string;
    };
    static regex: {
        commandReplacer: RegExp;
    };
    regex: {
        commandReplacer: RegExp;
    };
    static command: {
        defaultEphemeral: boolean;
        dmOnlyDefault: boolean;
        defaultHidden: boolean;
        defaultOwnerOnly: boolean;
        defaultGuarded: boolean;
        defaultChannelOnly: boolean;
        defaultArgStyle: string;
        argStyleArray: readonly ["string", "single", "multiple", "array", "list"];
        defaultCacheResult: boolean;
        defaultNSFW: boolean;
        defaultNSFWOnly: boolean;
        defaultRest: boolean;
        defaultAdminOnly: boolean;
        defaultModOnly: boolean;
        defaultAllowExtraArgs: boolean;
        defaultInteractions: boolean;
        defaultArgSplitter: string;
        defaultLastRunBy: number;
        defaultAutoAlias: boolean;
        defaultCapsSensitive: boolean;
        defaultTestOnly: boolean;
        defaultSlash: boolean;
        defaultCommandOptions: {
            description: string;
            options: CommandSubOptions[];
        };
        defaultCommndSubOption: CommandSubOptions;
    };
    command: {
        defaultEphemeral: boolean;
        dmOnlyDefault: boolean;
        defaultHidden: boolean;
        defaultOwnerOnly: boolean;
        defaultGuarded: boolean;
        defaultChannelOnly: boolean;
        defaultArgStyle: string;
        argStyleArray: readonly ["string", "single", "multiple", "array", "list"];
        defaultCacheResult: boolean;
        defaultNSFW: boolean;
        defaultNSFWOnly: boolean;
        defaultRest: boolean;
        defaultAdminOnly: boolean;
        defaultModOnly: boolean;
        defaultAllowExtraArgs: boolean;
        defaultInteractions: boolean;
        defaultArgSplitter: string;
        defaultLastRunBy: number;
        defaultAutoAlias: boolean;
        defaultCapsSensitive: boolean;
        defaultTestOnly: boolean;
        defaultSlash: boolean;
        defaultCommandOptions: {
            description: string;
            options: CommandSubOptions[];
        };
        defaultCommndSubOption: CommandSubOptions;
    };
    static constants: {
        speedOfSound: Number;
        regex: {
            numberStringFormat: RegExp;
            mongoURIRegex: RegExp;
        };
    };
    constants: {
        speedOfSound: Number;
        regex: {
            numberStringFormat: RegExp;
            mongoURIRegex: RegExp;
        };
    };
    static physics: {
        defaultGravityConstant: number;
        speed: (distance: number, time: number) => number;
        distance: (speed: number, time: number) => number;
        time: (distance: number, speed: number) => number;
        forceOfGravity: (unit?: number) => void;
        aeronautics: {
            calculateWingLoading: (weight: number, wingArea: number) => number;
            calculateLiftCoefficent: typeof calculateLiftCoefficent;
            calculateLiftForce: (liftCoefficent: number, fluidDensity: number, fluidVelocity: number, area: number) => number;
        };
    };
}
declare function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, fluidDynamicPressure: number): number;
declare function calculateLiftCoefficent(liftForce: number, relevantSurfaceArea: number, fluidDensity: number, fluidVelocity: number): number;
export default Settings;
