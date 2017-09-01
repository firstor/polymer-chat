import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {ChannelModule} from '../channel/channel.module';
import {ChatComponent} from './chat/chat.component';
import {MessageItemComponent} from './item/message-item.component';
import {MessageInputComponent} from './input/message-input.component';

import {UserService} from './user.service';
import {MessageService} from './message.service';
import {MessagePostTimePipe} from './message-post-time.pipe';

@NgModule({
    declarations: [
        ChatComponent,
        MessageItemComponent,
        MessageInputComponent,
        MessagePostTimePipe
    ],
    imports: [
        CommonModule,
        SharedModule,
        ChannelModule
    ],
    exports: [
        ChatComponent,
        MessageItemComponent,
        MessageInputComponent,
        MessagePostTimePipe
    ],
    providers: [
        UserService,
        MessageService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MessageModule {
}
