import { computed, get } from '@ember/object';
import ContentPlaceholersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-text';

export default ContentPlaceholersBase.extend({
  className: 'ember-content-placeholders-text',
  classNameBindings: ['className'],

  lines: 4,
  layout,

  linesArray: computed('lines', function() {
    return Array.apply(null, Array(get(this, 'lines')));
  }),

});
