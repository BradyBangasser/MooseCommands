import MooseClient from "..";
import mongoose from "mongoose";
import { DataBaseManagerOptions } from "../..";
declare class DataBaseManager {
    private _client;
    readonly mongoURI: string;
    readonly options: DataBaseManagerOptions;
    private _connection?;
    private _models;
    constructor(client: MooseClient, options: DataBaseManagerOptions | string);
    setup(): Promise<this>;
    private _getSchemas;
    get connection(): typeof mongoose | undefined;
    get models(): {
        [key: string]: mongoose.Model<any, {}, {}, {}, any>;
    };
    private _registerModel;
    getModel(modelName: string): mongoose.Model<any> | null | undefined;
    private _dbInit;
}
export default DataBaseManager;
