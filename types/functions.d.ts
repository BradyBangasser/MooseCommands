/// <reference types="node" />
import { PathLike } from "fs";
import { RanStringOptions, TimeString } from ".";
import { setTimeout as wait } from "node:timers/promises";
/**
 * Clean up a Path string for import use
 * @param {string | PathLike} dirpath Path to Sanitize
 * @param {boolean} removeCWD Remove the CWD from path
 * @returns {string} Path String
 */
declare function sanitizePath(dirpath: string | PathLike, removeCWD?: boolean): string;
/**
 * Gets all files from a specified path or from the cwd
 * @param {string | PathLike} dirpath The Path to the directory
 * @returns {[string, string][]} [File Path, File Name][]
 */
declare function getFiles(dirpath?: string | PathLike): [string, string][];
/**
 * Gets a file by it's name
 * @param {string} name Name of file
 * @returns [File Path, File Name]
 */
declare function getFileByName(name: string): [string, string][];
/**
 * Gets files by extention
 * @param {string} extention Extention  of file
 * @returns [File Path, File Name][]
 */
declare function getFilesByExtention(extention: string): [string, string][];
/**
 * Turns an Object into an Array of objects, separting each key
 * @param {{[key: string]: any}} object An object to Arrayify
 * @param {string} key Optional argument for a key that replaces the one in the object
 * @returns {object[]} An Array of Objects
 */
declare function Arrayify(object: {
    [key: string]: any;
} | string | string[], key?: string): any[];
/**
 * Generates a random string
 * @param {RanStringOptions | number} length The length of the string or RanStringOptions object
 * @returns {string} string
 */
declare function generateRandomString(length?: RanStringOptions | number): string;
/**
 * Capitalizes a string
 * @param {string} str string
 * @returns {string} string
 */
declare function capitalize(str: string): string;
/**
 * Converts array of string to camel case string
 * @param {string[]} str string[]
 * @returns {string} string
 */
declare function convertToCamelCase(str: string[]): string;
/**
 * Removes dups from array
 * @param {any[]} array Array
 * @returns {any[]} Array
 */
declare function removeDups(array: any[]): any[];
/**
 * Check if you can create an instance of an object with the new keyword
 * @param {any} object Object
 * @returns boolean
 */
declare function isNewable(object: any): boolean;
/**
 * Converts a TimeString to a normal JS Date
 * @param {TimeString} timeString TimeString
 * @return {Date} Date
 */
declare function createDate(timeString: TimeString | number | Date): Date;
export { wait, sanitizePath, getFiles, getFileByName, getFilesByExtention, Arrayify, generateRandomString, capitalize, convertToCamelCase, removeDups, isNewable, createDate, };
