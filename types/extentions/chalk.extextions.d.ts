import { Chalk, ColorSupportLevel } from "chalk";
declare class DisCrackChalk extends Chalk {
    [key: string]: any;
    constructor(level?: ColorSupportLevel);
}
export default DisCrackChalk;
