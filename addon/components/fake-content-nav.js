import FakeContentBase from './fake-content-base';
import layout from '../templates/components/fake-content-nav';

export default FakeContentBase.extend({
  className: 'ember-fake-content-nav',
  classNameBindings: ['className'],
  layout
});
