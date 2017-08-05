import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Channel} from '../channel.model';
import {ChannelService} from '../channel.service';

@Component({
    selector: 'channel-creator',
    templateUrl: './channel-creator.component.html',
    styleUrls: ['./channel-creator.component.css']
})
export class ChannelCreatorComponent implements OnInit {
    @ViewChild('dlg')
    private dlg: ElementRef;
    public form: FormGroup;

    constructor(private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(16)]],
            disp: ['', [Validators.required, Validators.maxLength(32)]],
            desc: ['', Validators.maxLength(64)],
            isPrivate: true
        });
    }

    onSubmit(): void {
    }

    open(): void {
        (this.dlg.nativeElement as any).toggle();
    }

    close(): void {
        (this.dlg.nativeElement as any).toggle();
    }
}
