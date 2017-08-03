import {Injectable} from '@angular/core';
import {Message} from './message.model';

@Injectable()
export class MessageService {
    constructor() {
    }

    public fetchMessages(): Message[] {
        return [
            new Message(1, new Date(2017, 6, 12, 9, 3, 10), 'foo', 'Hello'),
            new Message(2, new Date(2017, 6, 12, 9, 3, 12), 'bar', 'Hi, foo!'),
            new Message(3, new Date(2017, 6, 12, 9, 3, 15), 'foo', 'How are you?'),
            new Message(4, new Date(2017, 6, 12, 9, 3, 20), 'bar', 'I am fine, thanks'),
            new Message(5, new Date(2017, 6, 12, 9, 3, 22), 'bar', 'what about you?'),
            new Message(6, new Date(2017, 6, 12, 9, 3, 27), 'foo', 'I am also good.'),
            new Message(7, new Date(2017, 6, 12, 9, 3, 32), 'bar', 'Good to hear that :)'),
            new Message(8, new Date(2017, 6, 12, 9, 4, 18), 'foo', 'How is your job going?'),
            new Message(9, new Date(2017, 6, 12, 9, 4, 25), 'bar', 'Going well ~'),
            new Message(10, new Date(2017, 6, 12, 9, 4, 29), 'bar', 'Everything was fine so far'),
            new Message(11, new Date(2017, 6, 12, 9, 5, 33), 'foo', 'OK, then get busy with your job ~'),
            new Message(12, new Date(2017, 6, 12, 9, 5, 45), 'foo', 'Have a good day!'),
            new Message(13, new Date(2017, 6, 12, 9, 5, 50), 'bar', 'OK, bye!'),
        ];
    }
}
