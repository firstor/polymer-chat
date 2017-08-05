import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DialogBaseComponent} from './dialog/base/dialog-base.component';
import {CommonDialogComponent} from './dialog/common/common-dialog.component';

@NgModule({
    declarations: [
        DialogBaseComponent,
        CommonDialogComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DialogBaseComponent,
        CommonDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
