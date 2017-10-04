import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fake-content-heading', 'Integration | Component | fake content heading', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fake-content-heading}}`);
  assert.equal(this.$('[data-test-ember-fake-content-heading-img]').length, 0, 'it has no img');

  this.render(hbs`{{fake-content-heading img=true}}`);
  assert.equal(this.$('[data-test-ember-fake-content-heading-img]').length, 1, 'it has an img');
});
