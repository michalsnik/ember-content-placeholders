import ContentPlaceholdersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-img';

export default ContentPlaceholdersBase.extend({
  className: 'ember-content-placeholders-img',
  classNameBindings: ['className'],
  layout
});
