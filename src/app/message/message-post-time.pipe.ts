import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'messagePostTime'
})
export class MessagePostTimePipe implements PipeTransform {
    public transform(value: Date, type: string = ''): string {
        let postTime = new Date(value);
        let HH = ('0' + postTime.getHours()).slice(-2);
        let mm = ('0' + postTime.getMinutes()).slice(-2);
        return HH + ':' + mm;
    }
}
