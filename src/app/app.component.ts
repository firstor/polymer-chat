import {Component} from '@angular/core';
import {MessageService} from './message/message.service';
import {Message} from './message/message.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public messages: Message[];

    constructor(private msgService: MessageService) {
        this.messages = this.msgService.fetchMessages();
    }
}
