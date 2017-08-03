import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Message} from './message.model';

@Injectable()
export class MessageService {

    private msgApiUrl = 'api/messages';

    constructor(private http: Http) {
    }

    getMessages(): Promise<Message[]> {
        return this.http
            .get(this.msgApiUrl)
            .toPromise()
            .then((res) => {
                return res.json().data as Message[];
            })
            .catch(this.handleError);
    }

    getMessage(id: number): Promise<Message> {
        const url = `${this.msgApiUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json().data as Message;
            })
            .catch(this.handleError);
    }

    handleError(err: any): Promise<any> {
        console.error('An error occured ', err);
        return Promise.reject(err.message || err);
    }
}
