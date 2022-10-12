import fs, { PathLike } from "fs"
import path from "path";
import fsp from "fs/promises"
import MooseClient from "..";
import mongoose from "mongoose"
import { DataBaseManagerOptions, SweeperInterval } from "../..";
import { capitalize, getFiles } from "../../functions";
import settings from "../../settings";
import DefaultUserModel from "../defaults/schemas/userSchema"

class DataBaseManager {
    private _client: MooseClient
    readonly mongoURI: string
    readonly options: DataBaseManagerOptions
    private _connection?: typeof mongoose
    private _models: { [key: string]: mongoose.Model<any> } = {}

    constructor(client: MooseClient, options: DataBaseManagerOptions | string) {
        this.options = (typeof options === "string" ? { mongoURI: options } : options)

        if (!Array.isArray(this.options.mongoURI.match(settings.constants.regex.mongoURIRegex))) throw new SyntaxError(`"${this.options.mongoURI}" is not a valid MongoDB URI`)

        this.mongoURI = this.options.mongoURI
        this._client = client
        this.options.keepAlive = true
    }

    public async setup() {
        try {
            this._connection = await mongoose.connect(this.mongoURI, this.options)
            await this._getSchemas(this.options.schemaPath)
            return this
        } catch (error) {
            throw error
        }
    }

    private async _getSchemas(schemaPath: string | PathLike = path.join(__dirname, "schemas")) {
        const files = getFiles(schemaPath)
        
        for (const [filePath, fileName] of files) {
            const content = await import(filePath)
            const modelName = capitalize(fileName.toLowerCase().replace("model", "").replace("schema", ""))

            if (content instanceof mongoose.Schema) {
                this._models[modelName] = mongoose.model<typeof content>(modelName, content)
            }
        }
    }

    public get connection() {
        return this._connection
    }

    public get models() {
        return this._models
    }

    private _registerModel(modelName: string, model: mongoose.Schema) {
        this._models[modelName] = mongoose.model(modelName, model)
    }

    public getModel(modelName: string): mongoose.Model<any> | null | undefined {
        return this._models[modelName]
    }

    private async _dbInit() {
        if (this.options.defaultModels === "all") {
            
        }
    }
}

export default DataBaseManager