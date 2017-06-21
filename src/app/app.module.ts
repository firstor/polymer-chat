import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PolymerModule} from '@codebakery/origami';
import {AppElementsModule, IronElementsModule, PaperElementsModule} from '@codebakery/origami/lib/collections';
import {AppComponent} from './app.component';
import {MessageService} from './common/service/message.service';
import {MessageItemComponent} from './message/message-item.component';
import {MessageInputComponent} from './message/input/message-input.component';
import {MessagePostTimePipe} from './message/message-post-time.pipe';

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
