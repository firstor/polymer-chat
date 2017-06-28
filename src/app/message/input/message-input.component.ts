import {Component, Input} from '@angular/core';

@Component({
    selector: 'message-input',
    templateUrl: 'message-input.component.html',
    styleUrls: ['message-input.component.css']
})
export class MessageInputComponent {
    public sendMessage() {
    }

    public messageInputKeyPressed(e: any): void {
        if (e.keyCode === 13 && e.code === 'Enter' || e.code === 'NumpadEnter') {
            this.sendMessage();
            e.preventDefault();
        }
    }
}
