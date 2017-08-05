import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PolymerModule} from '@codebakery/origami';
import {AppElementsModule, IronElementsModule, PaperElementsModule} from '@codebakery/origami/lib/collections';

import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {ChatComponent} from './message/chat/chat.component';
import {ChannelListComponent} from './channel/list/channel-list.component';
import {ChannelItemComponent} from './channel/item/channel-item.component';
import {ChannelCreatorComponent} from './channel/create/channel-creator.component';
import {MessageItemComponent} from './message/item/message-item.component';
import {MessageInputComponent} from './message/input/message-input.component';
import {ChannelService} from './channel/channel.service';
import {MessageService} from './message/message.service';
import {MessagePostTimePipe} from './message/message-post-time.pipe';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppDataService} from './app-data.service';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        ChannelListComponent,
        ChannelItemComponent,
        ChannelCreatorComponent,
        MessageItemComponent,
        MessageInputComponent,
        MessagePostTimePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(AppDataService),
        PolymerModule.forRoot(),
        AppElementsModule,
        PaperElementsModule,
        IronElementsModule,
        SharedModule
    ],
    providers: [
        ChannelService,
        MessageService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
