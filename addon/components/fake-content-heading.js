import FakeContentBase from './fake-content-base';
import layout from '../templates/components/fake-content-heading';

export default FakeContentBase.extend({
  className: 'ember-fake-content-heading',
  classNameBindings: ['className'],
  layout
});
