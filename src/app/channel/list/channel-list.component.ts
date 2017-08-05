import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../channel.model';
import {ChannelService} from '../channel.service';

@Component({
    selector: 'channel-list',
    templateUrl: 'channel-list.component.html',
    styleUrls: ['channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
    public channels: Channel[];

    constructor(private channelService: ChannelService) {
    }

    ngOnInit(): void {
        this.channelService.getChannels().then((channels) => {
            this.channels = channels;
        });
    }
}
