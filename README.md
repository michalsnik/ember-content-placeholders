# ember-fake-content

[![NPM version](https://img.shields.io/npm/v/ember-fake-content.svg?style=flat)](https://npmjs.org/package/ember-fake-content)

> Ember addon for rendering fake content while data is fetching to provide better UX and lower bounce rate.

## :cd: Installation

* `ember install ember-fake-content`

## :rocket: Usage

```hbs
{{#fake-content as |fake|}}
  {{fake.heading img=true}}
  {{fake.text lines="3"}}
{{/fake-content}}
```

![rendered example](https://i.imgur.com/LWfqxUe.png)

```hbs
{{#fake-content rounded=true as |fake|}}
  {{fake.img}}
  {{fake.heading}}
{{/fake-content}}
```

![rendered example](https://i.imgur.com/NBb6ZB7.png)

### Available components and properties

* root `fake-content`
  * Bollean `animated` (default: true)
  * Bollean `rounded` (default: false) - border radius
  > properties from root component are automatically passed down to each yielded component, so they can be overriden whenever necessary per comoponent case


* yield `fake.heading`
  * Boolean `img` (default: false)


* yield `fake.text`
  * Number `lines` (default: 4)


* yield `fake.img`


* yield `fake.nav`

### Customization

Composable components make it easy to form a required module, but sometime it's not enough. If you'd like to also amend styling, there are few variables that you can help you out:

* `$ember-fake-content-primary-color` - darken background
* `$ember-fake-content-secondary-color` - light background
* `$ember-fake-content-border-radius` - if `rounded` property is set it sets the border radius
* `$ember-fake-content-line-height` - single line height
* `$ember-fake-content-spacing` - distance between lines

## 🔓 License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
