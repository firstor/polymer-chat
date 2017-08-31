import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
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
    @Output()
    private channelCreate: EventEmitter<Channel> = new EventEmitter();

    constructor(private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(16)]],
            disp: ['', [Validators.required, Validators.maxLength(32)]],
            desc: ['', Validators.maxLength(48)],
            isPrivate: true
        });
    }

    open(): void {
        this.resetForm();
        this.dlg.nativeElement.open();
    }

    close(): void {
        this.dlg.nativeElement.close();
        this.resetForm();
    }

    private resetForm(): void {
        this.form.reset({
            name: '',
            disp: '',
            desc: '',
            isPrivate: true
        });
    }

    onSubmit(): void {
        this.createChannel();
    }

    private createChannel(): void {
        this.channelService.createChannel({
            name: this.form.value.name,
            disp: this.form.value.disp,
            desc: this.form.value.desc,
            isPrivate: this.form.value.isPrivate
        })
        .then((channel: Channel) => {
            this.channelCreate.emit(channel);
            this.close();
        })
        .catch((err: any) => {
            console.error(err);
        });
    }
}
