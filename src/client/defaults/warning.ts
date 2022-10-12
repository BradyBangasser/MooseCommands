import MooseClient, { JSONWarning, MooseMember, MooseUser } from "../..";

class Warning {

    readonly user: MooseMember
    // readonly author: MooseMember
    // readonly time: Date
    // readonly reason: string

    constructor(client: MooseClient, user: MooseMember, author: MooseMember, time: Date, reason: string)
    constructor(client: MooseClient, jsonWarn: JSONWarning)
    constructor(client: MooseClient, userJSON: MooseMember | JSONWarning, author?: MooseMember, time?: Date, reason?: string) {
        if (userJSON instanceof MooseMember) {
            this.user = userJSON
        } else {
            this.user = client
        }
    }

    public delete() {

    }

    public toJSON() {

    }

    public toString() {

    }
}