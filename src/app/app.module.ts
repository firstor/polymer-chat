import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PolymerModule} from '@codebakery/origami';
import {AppElementsModule, IronElementsModule, PaperElementsModule} from '@codebakery/origami/lib/collections';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        PolymerModule.forRoot(),
        AppElementsModule,
        PaperElementsModule,
        IronElementsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
