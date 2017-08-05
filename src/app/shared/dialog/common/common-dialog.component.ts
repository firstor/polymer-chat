import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DialogBaseComponent} from '../base/dialog-base.component';

@Component({
    selector: 'common-dialog',
    templateUrl: 'common-dialog.component.html',
    styleUrls: ['common-dialog.component.css']
})
export class CommonDialogComponent {
    @Input()
    public dialogTitle: string;
    @ViewChild('dialogBase')
    private dialogBase: DialogBaseComponent;

    public open(): void {
        this.dialogBase.open();
    }

    public close(): void {
        this.dialogBase.close();
    }
}
