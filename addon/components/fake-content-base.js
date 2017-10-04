import Component from '@ember/component';

export default Component.extend({
  rounded: false,
  animated: true,

  classNameBindings: [
    'rounded:ember-fake-content-is-rounded',
    'animated:ember-fake-content-is-animated'
  ],
});
