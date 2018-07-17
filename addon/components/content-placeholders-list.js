import { computed, get } from '@ember/object';
import ContentPlaceholersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-list';

export default ContentPlaceholersBase.extend({
  layout,

  className: 'ember-content-placeholders-list',
  classNameBindings: ['className'],

  ordered: false,

  items: 4,
  itemsArray: computed('items', function() {
    return Array.apply(null, Array(get(this, 'items')));
  }),
});
