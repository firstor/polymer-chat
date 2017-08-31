export class Message {
    constructor(public id: number,
                public channel: number,
                public posted: Date,
                public sender: string,
                public text: string
                ) {
    }
}
