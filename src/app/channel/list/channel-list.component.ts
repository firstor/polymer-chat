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
    public selectedChannel: Channel;

    constructor(private channelService: ChannelService) {
    }

    ngOnInit(): void {
        this.getChannels();
    }

    private getChannels(): void {
        this.channelService.getChannels().then((channels) => {
            this.channels = channels;
            this.selectedChannel = this.channels[0];
        });
    }

    isSelected(channel: Channel): boolean {
        return this.selectedChannel && this.selectedChannel.id === channel.id;
    }

    onChannelSelect(channel: Channel): void {
        this.selectedChannel = channel;
    }

    onAddChannel(): void {
    }
}
