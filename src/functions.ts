import fs, { Dirent, PathLike } from "fs";
import fsp from "fs/promises"
import path from "path";
import { RanStringOptions, TimeString } from ".";
import settings from "./settings";
import { setTimeout as wait } from "node:timers/promises"
import { TimeUnitConversionFromMiliseconds } from "./enums";

/**
 * Clean up a Path string for import use
 * @param {string | PathLike} dirpath Path to Sanitize
 * @param {boolean} removeCWD Remove the CWD from path
 * @returns {string} Path String
 */

function sanitizePath(dirpath: string | PathLike, removeCWD: boolean = false) {
    dirpath = dirpath.toString()
    dirpath = (removeCWD ? dirpath.replace(process.cwd(), "") : dirpath)
    return dirpath.replace(/\\/g, '/')
}

/**
 * Gets all files from a specified path or from the cwd
 * @param {string | PathLike} dirpath The Path to the directory 
 * @returns {[string, string][]} [File Path, File Name][]
 */

function getFiles(dirpath: string | PathLike = process.cwd()): [string, string][] {

    const files = fs.readdirSync(dirpath, { withFileTypes: true })

    let funkyFiles: [string, string][] = [] // Get it because function starts with fun and that's funky

    files.forEach(file => {
        if (file.isDirectory()) funkyFiles = [...funkyFiles, ...getFiles(path.join(String(dirpath), file.name))]
        else if (!file.name.startsWith("!") || file.name.endsWith(".js")) {
            let fileName: string | string[] = file.name.replace(/\\/g, '/').split('/')
            fileName = fileName[fileName.length - 1].split('.')[0].toLowerCase()
            funkyFiles.push([`${dirpath}/${file.name}`, fileName])
        }
    })

    return funkyFiles
}

/**
 * Gets a file by it's name
 * @param {string} name Name of file
 * @returns [File Path, File Name]
 */

function getFileByName(name: string) {
    name = name.toLowerCase()
    const files = getFiles(__dirname)
    const withName = []
    for (const file of files) {
        if (file[1] === name) withName.push(file)
    }
    return withName
}

/**
 * Gets files by extention
 * @param {string} extention Extention  of file
 * @returns [File Path, File Name][]
 */

function getFilesByExtention(extention: string) {
    if (!extention.startsWith(".")) throw new SyntaxError(`${extention} is not a valid extention.`)
    extention = extention.toLowerCase()
    const files = getFiles(__dirname)
    const withName = []
    for (const file of files) {
        if (file[0].endsWith(extention)) withName.push(file)
    }
    return withName
}

/**
 * Turns an Object into an Array of objects, separting each key
 * @param {{[key: string]: any}} object An object to Arrayify
 * @param {string} key Optional argument for a key that replaces the one in the object
 * @returns {object[]} An Array of Objects
 */

function Arrayify(object: {[key: string]: any} | string | string[], key?: string) {
    if (typeof object === "string") return [object]
    if (Array.isArray(object)) return object

    const array: any[] = []
    Object.keys(object).forEach(objkey => {
        const obj: { [key: string]: unknown } = {}
        obj[key ?? objkey] = object[objkey]
        array.push(obj)
    })
    return array
}



/**
 * Generates a random string 
 * @param {RanStringOptions | number} length The length of the string or RanStringOptions object
 * @returns {string} string
 */

function generateRandomString(length: RanStringOptions | number = 16): string {
    let string = ""
    let chars = ""
    let len

    if (typeof length === "object") {
        chars += (length.caps ? settings.characters.upper : "") + (length.lower ? settings.characters.lower : "") + (length.numbers ? settings.characters.number : "") + (length.special ? settings.characters.special : "")
        if (!Array.isArray(length.exclude)) {
            length.exclude = (typeof length.exclude === "undefined" ? [] : [length.exclude])
        }
        length.exclude.forEach((char) => {
            chars.replace(char.toString(), "")
        })

        len = length.length
    } else if (typeof length === "number" || !isNaN(parseInt(length))) {
        chars += (settings.characters.lower + settings.characters.number + settings.characters.special + settings.characters.upper)
        len = length
    } else throw new SyntaxError("Invalid Input")

    for (let i = 0; i < len; i++) {
        string += chars[Math.floor(Math.random() * chars.length)]
    }

    return string
}

/**
 * Capitalizes a string
 * @param {string} str string
 * @returns {string} string
 */

function capitalize(str: string): string {
    let split = str.split("")
    split[0] = split[0].toUpperCase()
    return split.join("")
}

/**
 * Converts array of string to camel case string
 * @param {string[]} str string[]
 * @returns {string} string
 */

function convertToCamelCase(str: string[]): string {
    str[0] = str[0].toLowerCase()
    for (let i = 0; i < str.length; i++) {
        str[i] = capitalize(str[i])
    }
    return str.join("")
}

/**
 * Removes dups from array
 * @param {any[]} array Array
 * @returns {any[]} Array
 */

function removeDups(array: any[]) {
    return array.filter((value, index) => array.indexOf(value) === index)
}

/**
 * Check if you can create an instance of an object with the new keyword
 * @param {any} object Object
 * @returns boolean
 */

function isNewable(object: any) {
    if (object.toString().substring(0, 5) === "class") return true
    return false
}

/**
 * Converts a TimeString to a normal JS Date
 * @param {TimeString} timeString TimeString
 * @return {Date} Date
 */

function createDate(timeString: TimeString | number | Date) {

    if (typeof timeString === "number") return new Date(timeString)
    if (timeString instanceof Date) return timeString

    let newDate = new Date()
    timeString = timeString.toLowerCase()
    
    const matches = timeString.match(settings.constants.regex.numberStringFormat)

    if (matches == null) return newDate

    let addedTime = 0

    matches.forEach(time => {
        const amountOfUnit = parseInt(time)
        const unit = parseInt(TimeUnitConversionFromMiliseconds[time.replace(/[^a-z]/gi, "") as any])
        if (typeof unit !== "number") throw new SyntaxError(`${unit} is not a valid time unit`)

        addedTime += (unit * amountOfUnit)
    })

    newDate.setMilliseconds(newDate.getMilliseconds() + addedTime)

    return newDate
}

// make custom type for distanceString
function parseDistanceUnit(distanceString: string): number {
    distanceString = distanceString.toLowerCase().trim()
    const splitDistanceString = distanceString.match(settings.constants.regex.numberStringFormat)
    if (splitDistanceString == null) return 0

    let time = 0

    splitDistanceString.forEach((split) => {
        let nums = parseInt(split)
        split.replace(/[\d]/gi, "")
        
    })



    return time

}

function parseSpeedUnits(speedString: string) {

}

export { 
    wait,
    sanitizePath, 
    getFiles, 
    getFileByName, 
    getFilesByExtention, 
    Arrayify,
    generateRandomString, 
    capitalize, 
    convertToCamelCase, 
    removeDups, 
    isNewable,
    createDate,
}