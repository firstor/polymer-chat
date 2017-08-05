import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PolymerModule} from '@codebakery/origami';
import {AppElementsModule, IronElementsModule, PaperElementsModule} from '@codebakery/origami/lib/collections';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {ChannelModule} from './channel/channel.module';
import {MessageModule} from './message/message.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppDataService} from './app-data.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(AppDataService),
        PolymerModule.forRoot(),
        AppElementsModule,
        IronElementsModule,
        PaperElementsModule,
        SharedModule,
        ChannelModule,
        MessageModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
