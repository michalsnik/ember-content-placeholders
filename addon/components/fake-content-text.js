import { computed, get } from '@ember/object';
import FakeContentBase from './fake-content-base';
import layout from '../templates/components/fake-content-text';

export default FakeContentBase.extend({
  className: 'ember-fake-content-text',
  classNameBindings: ['className'],

  lines: 4,
  layout,

  linesArray: computed('lines', function() {
    return Array.apply(null, Array(get(this, 'lines')));
  }),

});
