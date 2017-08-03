import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../message.model';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    public messages: Message[];

    constructor(private msgService: MessageService) {
    }

    ngOnInit(): void {
        this.msgService.getMessages().then((messages) => {
            this.messages = messages;
        });
    }
}
