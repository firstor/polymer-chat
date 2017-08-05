import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Channel} from '../channel.model';
import {ChannelService} from '../channel.service';

@Component({
    selector: 'channel-creator',
    templateUrl: './channel-creator.component.html',
    styleUrls: ['./channel-creator.component.css']
})
export class ChannelCreatorComponent implements OnInit {
    public theForm: FormGroup;

    constructor(private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.theForm = this.formBuilder.group({
            name: ['', Validators.required, Validators.maxLength(16)],
            disp: ['', Validators.required, Validators.maxLength(32)],
            desc: ['', Validators.maxLength(64)],
            isPrivate: true
        });
    }

    onSubmit(): void {
    }

    closeMe(): void {
    }
}
