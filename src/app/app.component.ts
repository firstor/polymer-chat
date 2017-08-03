import {Component, OnInit} from '@angular/core';
import {MessageService} from './message/message.service';
import {Message} from './message/message.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public messages: Message[];

    constructor(private msgService: MessageService) {
    }

    ngOnInit(): void {
        this.msgService.getMessages().then((messages) => {
            this.messages = messages;
        });
    }
}
