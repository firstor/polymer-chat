import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'messagePostTime'
})
export class MessagePostTimePipe implements PipeTransform {
    public transform(value: Date, type: string = ''): string {
        let HH  = ('0' + value.getHours()).slice(-2);
        let mm  = ('0' + value.getMinutes()).slice(-2);
        return HH + ':' + mm;
    }
}
