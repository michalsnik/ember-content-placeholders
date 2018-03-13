import ContentPlaceholdersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-nav';

export default ContentPlaceholdersBase.extend({
  className: 'ember-content-placeholders-nav',
  classNameBindings: ['className'],
  layout
});
