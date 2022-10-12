import MooseClient from "../client";
import MooseCache from "../client/cache";
declare class MooseError extends Error {
    readonly client: MooseClient;
    constructor(client: MooseClient, error: string);
}
declare class MooseCacheError extends MooseError {
    readonly cache: MooseCache;
    constructor(client: MooseClient, cache: MooseCache, error: string);
}
declare class MooseDatabaseError extends MooseError {
    constructor(client: MooseClient, error: string);
}
export { MooseError, MooseCacheError, MooseDatabaseError };
