import ContentPlaceholersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-nav';

export default ContentPlaceholersBase.extend({
  className: 'ember-content-placeholders-nav',
  classNameBindings: ['className'],
  layout
});
