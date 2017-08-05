import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Channel} from './channel.model';

@Injectable()
export class ChannelService {

    private msgApiUrl = 'api/channels';

    constructor(private http: Http) {
    }

    getChannels(): Promise<Channel[]> {
        return this.http
            .get(this.msgApiUrl)
            .toPromise()
            .then((res) => {
                return res.json().data as Channel[];
            })
            .catch(this.handleError);
    }

    getChannel(id: number): Promise<Channel> {
        const url = `${this.msgApiUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json().data as Channel;
            })
            .catch(this.handleError);
    }

    handleError(err: any): Promise<any> {
        console.error('An error occured ', err);
        return Promise.reject(err.message || err);
    }
}
