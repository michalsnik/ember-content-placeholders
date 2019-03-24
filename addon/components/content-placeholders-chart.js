import layout from '../templates/components/content-placeholders-chart';
import { computed, get } from '@ember/object';
import ContentPlaceholersBase from './content-placeholders-base';

export default ContentPlaceholersBase.extend({
  className: 'ember-content-placeholders-chart',
  classNameBindings: ['className'],

  columns: 15,
  layout,

  columnsArray: computed('columns', function() {
    return Array.apply(null, Array(get(this, 'columns')));
  }),
});
