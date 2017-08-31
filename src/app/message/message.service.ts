import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Channel} from '../channel/channel.model';
import {Message} from './message.model';

@Injectable()
export class MessageService {

    private msgApiUrl = 'api/messages';

    constructor(private http: Http) {
    }

    private getAllMessages(): Promise<Message[]> {
        return this.http
            .get(this.msgApiUrl)
            .toPromise()
            .then((res) => {
                return res.json().data as Message[];
            })
            .catch(this.handleError);
    }

    getMessages(channel: Channel): Promise<Message[]> {
        return this.getAllMessages()
            .then((all) => {
                let messages: Message[] = [];
                all.forEach((msg: Message, index) => {
                    if (msg.channel === channel.id) {
                        messages.push(msg);
                    }
                });
                return messages;
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
