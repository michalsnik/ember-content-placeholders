import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-placeholders-heading', 'Integration | Component | content placeholders heading', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{content-placeholders-heading}}`);
  assert.equal(this.$('[data-test-ember-content-placeholders-heading-img]').length, 0, 'it has no img');

  this.render(hbs`{{content-placeholders-heading img=true}}`);
  assert.equal(this.$('[data-test-ember-content-placeholders-heading-img]').length, 1, 'it has an img');

  this.render(hbs`{{content-placeholders-heading subtitle=false}}`);
  assert.equal(this.$('.ember-content-placeholders-heading__subtitle').length, 0, 'it has no subtitle');

  this.render(hbs`{{content-placeholders-heading}}`);
  assert.equal(this.$('.ember-content-placeholders-heading__subtitle').length, 1, 'it has a subtitle');
});
