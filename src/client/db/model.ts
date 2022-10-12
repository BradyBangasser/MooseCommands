import mongoose, { DefaultTypeKey, FlatRecord, Model, ObtainDocumentType, SchemaDefinition, SchemaDefinitionType, SchemaOptions, TypeKeyBaseType } from "mongoose";
import DisCrackClient from "..";
import { MooseCache } from "../..";

// No cheese with the spaghetti?
class CrackSchema<EnforcedDocType = any, M = Model<EnforcedDocType, any, any, any>, TInstanceMethods = {}, TQueryHelpers = {}, TVirtuals = {}, TStaticMethods = {}, TPathTypeKey extends TypeKeyBaseType = DefaultTypeKey, DocType extends ObtainDocumentType<DocType, EnforcedDocType, TPathTypeKey> = ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends mongoose.Schema<EnforcedDocType, M, TInstanceMethods, TQueryHelpers, TVirtuals, TStaticMethods, TPathTypeKey, DocType> {

    private _model!: mongoose.Model<any>


    constructor(name: string, client: DisCrackClient, definition?: SchemaDefinition<SchemaDefinitionType<EnforcedDocType>> | DocType, options?: SchemaOptions<TPathTypeKey, FlatRecord<DocType>, TInstanceMethods, TQueryHelpers, TStaticMethods, TVirtuals>) {
        
        if (definition && (definition as { [key: string]: any }).static) {
            
        }

        super(definition, options)

        if (client.db?.options.caching) {
            
        }
    }

    public get model() {
        return this._model ?? "Not created yet"
    }
}