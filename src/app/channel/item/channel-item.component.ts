import {Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Channel} from '../channel.model';

@Component({
    selector: 'channel-item',
    templateUrl: 'channel-item.component.html',
    styleUrls: ['channel-item.component.css']
})
export class ChannelItemComponent implements OnInit {
    @Input()
    public channel: Channel;
    @Input()
    public selected: boolean;
    @Output()
    private channelSelect: EventEmitter<Channel> = new EventEmitter();
    @ViewChild('itemSelector')
    private itemSelector: ElementRef;

    ngOnInit(): void {
        this.itemSelector.nativeElement.addEventListener('iron-activate', () => {
            this.channelSelect.emit(this.channel);
        });
    }
}
