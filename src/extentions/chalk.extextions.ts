import { Chalk, ColorSupportLevel } from "chalk"

class DisCrackChalk extends Chalk {
    [key: string]: any
    constructor(level?: ColorSupportLevel) {
        super({ level })
    }
}

export default DisCrackChalk