import Component from '@ember/component';

export default Component.extend({
  rounded: false,
  centered: false,
  animated: true,

  classNameBindings: [
    'rounded:ember-content-placeholders-is-rounded',
    'animated:ember-content-placeholders-is-animated',
    'centered:ember-content-placeholders-is-centered'
  ],
});
