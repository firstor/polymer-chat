# Import Polyfills

## Why required?
Angular is built on the latest standards of the web platform. Targeting such a wide range of browsers is challenging because they do not support all features of modern browsers. To face such problem, we need to load/import polyfill scripts ("polyfills") on the host web page (index.html) that implement missing features in JavaScript.

## When polyfills are loaded and How to import?
`.angular-cli.json` configures options to build an Angular project, and there is an entry to load polyfills in it, named `apps.polyfills`. It's given as `polyfills.ts` (by default; though we can give different file into it, will not debate on it).
 - **we will import all needed polyfills in the `polyfills.ts`**
 - **and they will be loaded before the app**

## Which polyfills are required?
There are two types of polyfills in Angular, [mandatory polyfills](https://angular.io/guide/browser-support#mandatory-polyfills) and [additional ones](https://angular.io/guide/browser-support#optional-browser-features-to-polyfill). Different polyfills are required to support different browsers and more and more polyfills may be imported to support other features. Here is a list of [suggested polyfills](https://angular.io/guide/browser-support#suggested-polyfills) by Angular.

## Load polyfills only when needed
By default, only mandatory polyfills are enabled to import and others are disabled. But in order to run our Angular app perfectly on old browsers, we need to import the disabled polyfills though they're NOT required on modern browsers, and thus this may lead to growth of script bundle and increase the loading time. This is obviously not our wish. Our wish is to load polyfills only when needed like as _Philip Walton_ explains in [his article](https://philipwalton.com/articles/loading-polyfills-only-when-needed).

## Conditional polyfilling - our solution!
There is only one entry in Angular to load polyfills, we should utilize it (`polyfills.ts`). We can simply prepare two kinds of browser support, one for modern/evergreen browsers (`polyfills.basic.ts`) and another for other old-fashioned browsers (`polyfills.target.ts`). And then we will load "only-required" polyfills for the former and import all polyfills for the latter.

So here is just implementation of the concept:
- `polyfills.ts` is going to be kept as the only entry to import polyfills, but it only act as a router for the conditional polyfilling so that it will include "only required" polyfills for evergreen browsers.
   ```ts
   /** Import basic polyfills required by Angular itself */
   import './polyfills.basic';

   /** Import optional polyfills to target browsers */
   if (!evergreenBrowser) {
       System.import('./polyfills.target');
   }
   ```
- `polyfills.basic.ts` will be an entry to import all basic polyfills required Angular itself.
   ```ts
   /** Evergreen browsers require these. **/
   import 'core-js/es6/reflect';
   import 'core-js/es7/reflect';
   ...
   ```
- `polyfills.target.ts` will be an entry to import other polyfills for more browser support.
   ```ts
   /** IE9, IE10 and IE11 requires all of the following polyfills. **/
   import 'core-js/es6/symbol';
   import 'core-js/es6/object';
   ...
   /**
    * Date, currency, decimal and percent pipes.
    * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
    */
   import 'intl';  // Run `npm install --save intl`.
   ...
   ```

Of course, we may add more kinds of browser support later by adding more `polyfills.xxx.ts`, but that will increase the number of polyfill chunks (it may be NOT good though it seems encouraged in HTTP/2) and we may use more complicated logic to import polyfills targeting browsers. It's up to you!
