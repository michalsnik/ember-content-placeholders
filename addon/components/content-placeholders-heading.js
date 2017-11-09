import ContentPlaceholersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-heading';

export default ContentPlaceholersBase.extend({
  className: 'ember-content-placeholders-heading',
  classNameBindings: ['className'],
  subtitle: true,
  layout
});
