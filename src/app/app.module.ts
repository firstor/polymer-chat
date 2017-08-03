import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PolymerModule} from '@codebakery/origami';
import {AppElementsModule, IronElementsModule, PaperElementsModule} from '@codebakery/origami/lib/collections';
import {AppComponent} from './app.component';
import {MessageService} from './message/message.service';
import {MessageItemComponent} from './message/item/message-item.component';
import {MessageInputComponent} from './message/input/message-input.component';
import {MessagePostTimePipe} from './message/message-post-time.pipe';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppDataService} from './app-data.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageItemComponent,
        MessageInputComponent,
        MessagePostTimePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(AppDataService),
        PolymerModule.forRoot(),
        AppElementsModule,
        PaperElementsModule,
        IronElementsModule
    ],
    providers: [
        MessageService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
