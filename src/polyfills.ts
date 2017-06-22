/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

import * as checkBrowserWithMinVersion from 'check-browser';
let evergreenBrowser = checkBrowserWithMinVersion({
    chrome: 49,
    firefox: 52,
    edge: 14,
    safari: 10
});
console.log('[polymer-chat] import polyfills targeting an ' + (evergreenBrowser ? 'evergreen' : 'old-fashioned') + ' browser');

declare var System: any;

if (!evergreenBrowser) {
    /** IE9, IE10 and IE11 requires all of the following polyfills. **/
    System.import('core-js/es6/symbol');
    System.import('core-js/es6/object');
    System.import('core-js/es6/function');
    System.import('core-js/es6/parse-int');
    System.import('core-js/es6/parse-float');
    System.import('core-js/es6/number');
    System.import('core-js/es6/math');
    System.import('core-js/es6/string');
    System.import('core-js/es6/date');
    System.import('core-js/es6/array');
    System.import('core-js/es6/regexp');
    System.import('core-js/es6/map');
    System.import('core-js/es6/set');

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    System.import('classlist.js');  // Run `npm install --save classlist.js`.
}

/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.


/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.



/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.



/***************************************************************************************************
 * APPLICATION IMPORTS
 */

if (!evergreenBrowser) {
    /**
     * Date, currency, decimal and percent pipes.
     * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
     */
    System.import('intl');  // Run `npm install --save intl`.
    /**
     * Need to import at least one locale-data with intl.
     */
    System.import('intl/locale-data/jsonp/en');
}