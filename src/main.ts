import {AppModule} from './app/app.module';
import {environment} from './env/env';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {webcomponentsReady} from '@codebakery/origami';

webcomponentsReady().then(() => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule, {
    enableLegacyTemplate: false
  }).then(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/worker-basic.min.js');
    }
  });
}).catch(error => {
  // No WebComponent support and webcomponentsjs is not loaded
  console.error(error);
});
