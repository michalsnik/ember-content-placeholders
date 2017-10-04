import FakeContentBase from './fake-content-base';
import layout from '../templates/components/fake-content-img';

export default FakeContentBase.extend({
  className: 'ember-fake-content-img',
  classNameBindings: ['className'],
  layout
});
