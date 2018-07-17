ember-content-placeholders
==============================================================================

[![NPM version](https://img.shields.io/npm/v/ember-content-placeholders.svg?style=flat)](https://npmjs.org/package/ember-content-placeholders)
[![Build Status](https://travis-ci.org/michalsnik/ember-content-placeholders.svg?branch=master)](https://travis-ci.org/michalsnik/ember-content-placeholders)

> Ember addon for rendering fake content while data is fetching to provide better UX and lower bounce rate.


:cd: Installation
------------------------------------------------------------------------------

```
ember install ember-content-placeholders
```


:rocket: Usage
------------------------------------------------------------------------------

```hbs
{{#content-placeholders as |placeholder|}}
  {{placeholder.heading img=true}}
  {{placeholder.text lines=3}}
{{/content-placeholders}}
```

![rendered example](https://i.imgur.com/LWfqxUe.png)

```hbs
{{#content-placeholders rounded=true as |placeholder|}}
  {{placeholder.img}}
  {{placeholder.heading}}
{{/content-placeholders}}
```

![rendered example](https://i.imgur.com/NBb6ZB7.png)

### Available components and properties

* root `content-placeholders`
  * Boolean `animated` (default: true)
  * Boolean `rounded` (default: false) - border radius
  * Boolean `centered` (default: false)
  > properties from root component are automatically passed down to each one of yielded components, so they can be overriden whenever necessary per comoponent case


* yield `placeholder.heading`
  * Boolean `img` (default: false)


* yield `placeholder.text`
  * Number `lines` (default: 4)


* yield `placeholder.img`


* yield `placeholder.nav`


* yield `placeholder.list`
  * Boolean `ordered` (default: false)

**TO DO:**
- `placeholder.chart`
- `placeholder.table`

### Customization

Composable components make it easy to form a required module, but sometimes it's not enough. If you'd like to also amend styling, there are few variables that can help you out:

* `$ember-content-placeholders-primary-color` - heading background
* `$ember-content-placeholders-secondary-color` - light background
* `$ember-content-placeholders-border-radius` - border radius size when `rounded` property is `true`
* `$ember-content-placeholders-line-height` - single line height
* `$ember-content-placeholders-spacing` - distance between lines


:beers: Contributing
--------------

### Installation

* Fork this repo
* `git clone https://github.com/{YOUR_USERNAME}/ember-content-placeholders`
* `cd ember-content-placeholders`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

:lock: License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
