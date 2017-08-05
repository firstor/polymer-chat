import {InMemoryDbService}  from 'angular-in-memory-web-api';

export class AppDataService implements InMemoryDbService {
  createDb() {
    const channels = [
      {
        id: 1,
        name: 'bar',
        disp: 'Mr. Bar',
        desc: 'Co-founder of Bar Tech Inc.',
        isPrivate: true
      },
      {
        id: 2,
        name: 'general',
        disp: 'General',
        desc: 'Company-wide announcements and work-based matters'
      }
    ];
    const messages = [
      { id: 1, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 10), sender: 'foo', text: 'Hello' },
      { id: 2, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 12), sender: 'bar', text: 'Hi, foo!' },
      { id: 3, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 15), sender: 'foo', text: 'How are you?' },
      { id: 4, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 20), sender: 'bar', text: 'I am fine, thanks' },
      { id: 5, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 22), sender: 'bar', text: 'what about you?' },
      { id: 6, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 27), sender: 'foo', text: 'I am also good.' },
      { id: 7, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 3, 32), sender: 'bar', text: 'Good to hear that :)' },
      { id: 8, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 4, 18), sender: 'foo', text: 'How is your job going?' },
      { id: 9, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 4, 25), sender: 'bar', text: 'Going well ~' },
      { id: 10, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 4, 29), sender: 'bar', text: 'Everything was fine so far' },
      { id: 11, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 5, 33), sender: 'foo', text: 'OK, then get busy with your job ~' },
      { id: 12, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 5, 45), sender: 'foo', text: 'Have a good day!' },
      { id: 13, channel: channels[0].id, posted: new Date(2017, 6, 12, 9, 5, 50), sender: 'bar', text: 'OK, bye!' },
      { id: 14, channel: channels[1].id, posted: new Date(2017, 6, 15, 8, 25, 10), sender: 'foo', text: 'A conference is arranged at 3:00 PM today' },
      { id: 15, channel: channels[1].id, posted: new Date(2017, 6, 15, 9, 25, 20), sender: 'foo', text: 'discussing all technical problems that we met so far' },
      { id: 16, channel: channels[1].id, posted: new Date(2017, 6, 15, 9, 36, 30), sender: 'bar', text: 'Got it, will participate in it' }
    ];
    return {
      channels: channels,
      messages: messages
    };
  }
}
