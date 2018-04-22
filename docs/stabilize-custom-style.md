# Stabilize Custom Styles Through All Browser Targets

Sometimes app gets broken in its styles when we add new feature or modify something on the app. In most cases, the app looks okay on Chrome, but looks mis-styled on other browsers, such as Firefox, IE, Edge, Safari, etc.

Mostly this might happen due to custom CSS variables and mixins, then what should we do in order to stabilize custom styles through all browser targets?


## What makes styles broken?

There are two possible cases that styles can be broken.
  * A. Incorrect use of custom CSS properties and mixins
  * B. Used correctly, but due to limitation of browser support

We'll take a look at each one by one.

Before we go, we need to make sure that:
  * custom CSS variables and mixins are supported differently on different browsers.
    Basically custom CSS mixins are not supported natively on all browsers. Evergreen browsers natively support custom CSS variables but old version of Safari and IE 11+Edge do not.
  * Polymer supports ShadyCSS polyfill, but it doesn't work 100% same as the custom CSS spec due to its [limitation](https://github.com/webcomponents/shadycss#limitations).


## A. Incorrect use of custom CSS properties and mixins

This case means that we didn't use incorrectly the custom CSS properties and mixins. We always need to keep in our mind that custom CSS variables and mixins should be used to style elements inside shadow DOM tree. Here, I am focusing on two possible main problems:

### A.1. Priority of CSS variables and mixins
Generally speaking, it depends on how they're defined on the component. I want to say that we should consider either custom CSS variable or mixin is higher prioritized when we style a certain element. For example, `--paper-input-container-input-color` property has higher priority than `--paper-input-container-input` mixin.

### A.2. Where and which selectors to put to style elements?
The more important thing is where we should put style definitions. There are three possible scopes: a. element level, b. wrapper component level, and c. document-level. Also there are 3 kinds of selectors that can be used: the html root selector, a simple selector with element name itself, and common CSS selector.

Somewhat confused? Let's clarify one by one.

#### For the 3 possible scopes:
1) ~~element level: where the element is defined~~
    * e.g. https://github.com/firstor/hirst-dialog/blob/2b947f287cbfebf8d06682f6d3f95c093d0363bb/hirst-dialog-base.html#L43
2) wrapper level: where the element is used, that is, any Angular component that uses the element
    * e.g. https://github.com/firstor/polymer-chat/blob/807baaa2e21c17471c4bd108388e3c02309c17c1/src/app/message/item/message-item.component.css
3) document level: the global scope
    * e.g. https://github.com/firstor/polymer-chat/blob/807baaa2e21c17471c4bd108388e3c02309c17c1/src/index.html#L15

Our goal is often to override whatever is defined in the element level, so we're possibly going to define in either wrapper level or document level.

#### For the 3 kinds of selectors that can be used:
1) html root selector (`:root`) can always work, but at the lowest priority
    * a. given as `:root` in document-level, it always match `html` in this level
    * b. `:host` is rather used for this purpose in wrapper level and element level
2) a simple element selector
    * a. given as `:host` in element level
    * b. given as `element-name` in document-level and wrapper level
      this will always override `:host` in element level
3) ~~common CSS selectors~~
    * this often doesn't work well, since the selector doesn't always match the element, but only in a certain case, and thus this may lead to incorrect parsing due to lack of browser support of custom CSS variables and mixins; this is just the limitation of ShadyCSS.

#### So there are 4 possible cases that can style elements by priority:
1) `html` selector in document level, at lowest priority
2) element selector in document level
3) `:host` selector in wrapper level
4) element selector in wrapper level

#### And thus here are several recommendations:
* For the generic purpose of theme styles, put inside **`html` selector in document level**
* To always make sure the element is custom-styled, put inside **`html` selector in document level**
* If the element is only used in a wrapper level, may put inside **element selector in wrapper level**
* If the element should be styled differently in a certain wrapper, just put inside **element selector in wrapper level**
* If possible, should not put inside `:host` selector in wrapper level, rather should consider to choose 1) or 2), or 4).
* Should also consider if element can be styled properly with 3) or 4). `hirst-dialog` is a good example: if we have a look at its behavior, it adds its dialog instance into the top-level of the DOM tree when it's opened, so styling with 3) or 4) doesn't work due to selector mismatched. In that case, we should use 1) or 2).


## B. Limitation of Browser/Polyfill Support

This case means that we did use correctly the custom CSS properties and mixins but what we defined didn't work. This may be possibly due to limitation or lack support of browser or ShadyCSS polyfill.

We should never put our mind at reset once something is working fine on Chrome. It's the one of the most powerful browsers that supports most of recent technologies and so doesn't need all polyfills.

### B.1. Keep `;` at the end of custom CSS mixin
For the background of the issue, refer to this : https://github.com/firstor/polymer-chat/issues/11#issuecomment-310860325

### B.2. `element-name` selector is better than a generic CSS selector
Seems duplicate of A.2.
Refer to this : https://github.com/hotforfeature/origami/issues/37#issuecomment-311530360

### B.3. Avoid to define custom CSS mixin in Angular component
The following will not work due to limitation of ShadyCSS.
```css
/* my-angular-component.css */
:host {
  @apply --my-angular-component;
  color: var(--my-angular-component-color);
}
```

### B.4. Consider using Polymeric component rather than Angularic component if custom styles are required to define in it - Recommended Experimentally
Polymer's ShadyCSS may be limited to parse such multi-leveled custom styles.
* If a component is composed entirely of general CSS styles and JavaScript codes, it can be implemented as an Angular component.
* But if custom CSS variables and mixins are used in it, it should rather be a Polymeric component to avoid mis-styled.

The old `dialog-base` and its descendant `common-dialog` that were used once, are good examples. It was replaced with Polymeric [`hirst-dialog`](https://github.com/firstor/hirst-dialog) component with same feature implemented.
