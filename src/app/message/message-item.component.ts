import {Component, Input} from '@angular/core';
import {Message} from '../common/model/message.model';

@Component({
    selector: 'message-item',
    templateUrl: 'message-item.component.html',
    styleUrls: ['message-item.component.css']
})
export class MessageItemComponent {
    @Input()
    public message: Message;
}
