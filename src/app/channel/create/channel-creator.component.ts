import {Component, OnInit} from '@angular/core';
import {Channel} from '../channel.model';
import {ChannelService} from '../channel.service';

@Component({
    selector: 'channel-creator',
    templateUrl: './channel-creator.component.html',
    styleUrls: ['./channel-creator.component.css']
})
export class ChannelCreatorComponent {

    constructor(private channelService: ChannelService) {
    }

    onSubmit(): void {
    }

    closeMe(): void {
    }
}
