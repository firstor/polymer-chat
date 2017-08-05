import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';

declare const Polymer: any;

@Component({
    selector: 'dialog-base',
    templateUrl: 'dialog-base.component.html',
    styleUrls: ['dialog-base.component.css']
})
export class DialogBaseComponent {
    @Input()
    public dialogTitle: string;
    @ViewChild('dlgImpl')
    private dlgImpl: ElementRef;

    public open(): void {
        // making sure the dialog is always the top most element of chat
        // paper-dialog bug: https://github.com/PolymerElements/paper-dialog/issues/7
        document.querySelector('chat').appendChild(this.dlgImpl.nativeElement);
        this.dlgImpl.nativeElement.opened = true;
    }

    public close(): void {
        this.dlgImpl.nativeElement.close();
    }
}
