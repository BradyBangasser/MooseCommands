import MooseClient from "../client";
import MooseCache from "../client/cache";

class MooseError extends Error {
    readonly client: MooseClient
    constructor(client: MooseClient, error: string) {
        super(error)
        this.client = client
        this.message
    }
}

class MooseCacheError extends MooseError {
    readonly cache: MooseCache
    constructor(client: MooseClient, cache: MooseCache, error: string) {
        super(client, error)
        this.cache = cache
    }
}

class MooseDatabaseError extends MooseError {
    constructor(client: MooseClient, error: string) {
        super(client, error)
    }
}

export { MooseError, MooseCacheError, MooseDatabaseError }