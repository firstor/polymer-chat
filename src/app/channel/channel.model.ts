export class Channel {
    constructor(public id: number,
                public name: string,
                public disp: string,
                public desc: string,
                public isPrivate?: boolean) {
    }
}
