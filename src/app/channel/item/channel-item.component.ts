import {Component, Input} from '@angular/core';
import {Channel} from '../channel.model';

@Component({
    selector: 'channel-item',
    templateUrl: 'channel-item.component.html',
    styleUrls: ['channel-item.component.css']
})
export class ChannelItemComponent {
    @Input()
    public channel: Channel;
    @Input()
    public selected: boolean;
}
