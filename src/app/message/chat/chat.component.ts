import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../message.model';
import {Channel} from '../../channel/channel.model';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    public channel: Channel;
    public messages: Message[];

    constructor(private msgService: MessageService) {
    }

    ngOnInit(): void {
    }

    private getMessages(): void {
        this.msgService.getMessages(this.channel).then((messages) => {
            this.messages = messages;
        });
    }

    onChannelSelect(channel: Channel): void {
        console.log(`@${channel.name} was selected`);
        this.channel = channel;
        this.getMessages();
    }
}
