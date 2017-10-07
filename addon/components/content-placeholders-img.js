import ContentPlaceholersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-img';

export default ContentPlaceholersBase.extend({
  className: 'ember-content-placeholders-img',
  classNameBindings: ['className'],
  layout
});
