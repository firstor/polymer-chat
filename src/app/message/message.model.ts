import {User} from './user.model';

export class Message {
    constructor(public id: number,
                public channel: number,
                public posted: Date,
                public sender: number,
                public text: string,
                public senderObj?: User
                ) {
    }
}
