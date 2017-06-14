import {Injectable} from '@angular/core';
import {Message} from '../model/message.model';

@Injectable()
export class MessageService {
    constructor() {
    }

    public fetchMessages(): Message[] {
        return [
            new Message(1, new Date('2017-06-12 09:03:00'), 'foo', 'Hello'),
            new Message(2, new Date('2017-06-12 09:03:12'), 'bar', 'Hi, foo!'),
            new Message(3, new Date('2017-06-12 09:03:15'), 'foo', 'How are you?'),
            new Message(4, new Date('2017-06-12 09:03:20'), 'bar', 'I am fine, thanks'),
            new Message(5, new Date('2017-06-12 09:03:22'), 'bar', 'what about you?'),
            new Message(6, new Date('2017-06-12 09:03:27'), 'foo', 'I am also good.'),
            new Message(7, new Date('2017-06-12 09:03:32'), 'bar', 'Good to hear that :)'),
            new Message(8, new Date('2017-06-12 09:04:18'), 'foo', 'How is your job going?'),
            new Message(9, new Date('2017-06-12 09:04:25'), 'bar', 'Going well ~'),
            new Message(10, new Date('2017-06-12 09:04:29'), 'bar', 'Everything was fine so far'),
            new Message(11, new Date('2017-06-12 09:05:33'), 'foo', 'OK, then get busy with your job ~'),
            new Message(12, new Date('2017-06-12 09:05:45'), 'foo', 'Have a good day!'),
            new Message(13, new Date('2017-06-12 09:05:50'), 'bar', 'OK, bye!'),
        ];
    }
}
