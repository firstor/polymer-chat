import {Component, Output, EventEmitter, OnInit} from '@angular/core';
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
    @Output()
    private channelSelect: EventEmitter<Channel> = new EventEmitter();

    constructor(private channelService: ChannelService) {
    }

    ngOnInit(): void {
        this.getChannels();
    }

    private getChannels(): void {
        this.channelService.getChannels().then((channels) => {
            this.channels = channels;
            if (this.selectedChannel) {
                this.channels.forEach((channel: Channel, index) => {
                    if (this.selectedChannel.id === channel.id) {
                        this.selectedChannel = channel;
                        this.channelSelect.emit(this.selectedChannel);
                    }
                });
            } else {
                this.selectedChannel = this.channels[0];
                this.channelSelect.emit(this.selectedChannel);
            }
        });
    }

    isSelected(channel: Channel): boolean {
        return this.selectedChannel && this.selectedChannel.id === channel.id;
    }

    onChannelSelect(channel: Channel): void {
        if (this.selectedChannel && this.selectedChannel.id === channel.id) {
            return;
        }
        this.selectedChannel = channel;
        this.channelSelect.emit(this.selectedChannel);
    }

    onAddChannel(): void {
    }
}
