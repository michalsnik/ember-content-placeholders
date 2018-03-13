import ContentPlaceholdersBase from './content-placeholders-base';
import layout from '../templates/components/content-placeholders-heading';

export default ContentPlaceholdersBase.extend({
  className: 'ember-content-placeholders-heading',
  classNameBindings: ['className'],
  layout,

  // Option Defaults
  img: false,
  subtitle: true
});
