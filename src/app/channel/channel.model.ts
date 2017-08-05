export class Channel {
    constructor(public id: number,
                public name: string,
                public disp: string,
                public desc: string,
                public isPrivate?: boolean) {
    }

    public static jsonify(obj: {[key: string]: any}, includeId: boolean = true): string {
        let filtered = {};
        for (let key in obj) {
            if (key === 'id') {
                filtered[key] = obj[key] as number;
            } else if (key === 'name' || key === 'disp' || key === 'desc') {
                filtered[key] = obj[key] as string;
            } else if (key === 'isPrivate') {
                filtered[key] = obj[key] as boolean;
            }
        }
        return JSON.stringify(filtered);
    }
}
