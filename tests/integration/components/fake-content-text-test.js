import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fake-content-text', 'Integration | Component | fake content text', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{fake-content-text lines=6}}
  `);

  assert.equal(this.$('[data-test-ember-fake-content-text-line]').length, 6, 'it renders 6 lines of text');
});
