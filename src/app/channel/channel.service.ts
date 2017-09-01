import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Channel} from './channel.model';

@Injectable()
export class ChannelService {

    private apiUrl = 'api/channels';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http) {
    }

    getChannels(): Promise<Channel[]> {
        return this.http
            .get(this.apiUrl)
            .toPromise()
            .then((res) => {
                return res.json().data as Channel[];
            })
            .catch(this.handleError);
    }

    getChannel(id: number): Promise<Channel> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json().data as Channel;
            })
            .catch(this.handleError);
    }

    createChannel(input: {[key: string]: any}): Promise<Channel> {
        return this.http
            .post(this.apiUrl, Channel.jsonify(input), {
                headers: this.headers
            })
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
