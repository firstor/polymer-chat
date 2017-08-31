import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppElementsModule, IronElementsModule, PaperElementsModule} from '@codebakery/origami/lib/collections';

import {SharedModule} from '../shared/shared.module';
import {ChannelListComponent} from './list/channel-list.component';
import {ChannelItemComponent} from './item/channel-item.component';
import {ChannelCreatorComponent} from './create/channel-creator.component';

import {ChannelService} from './channel.service';

@NgModule({
    declarations: [
        ChannelListComponent,
        ChannelItemComponent,
        ChannelCreatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppElementsModule,
        IronElementsModule,
        PaperElementsModule,
        SharedModule
    ],
    exports: [
        ChannelListComponent,
        ChannelItemComponent,
        ChannelCreatorComponent
    ],
    providers: [
        ChannelService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChannelModule {
}
