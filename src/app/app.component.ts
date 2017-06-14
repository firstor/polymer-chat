import {Component} from '@angular/core';
import {MessageService} from './common/service/message.service';
import {Message} from './common/model/message.model';

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
