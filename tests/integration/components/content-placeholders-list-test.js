import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-placeholders-list', 'Integration | Component | content placeholders list', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{content-placeholders-list items=6}}
  `);

  assert.equal(this.$('[data-test-ember-content-placeholders-list-item]').length, 6, 'it renders 6 items');
});

test('it renders an unordered list by default', function(assert) {
  this.render(hbs`
    {{content-placeholders-list}}
  `);

  assert.ok(this.$('ul > [data-test-ember-content-placeholders-list-item]').length, 'ul rendered');
});

test('it renders an unordered list when ordered=false', function(assert) {
  this.render(hbs`
    {{content-placeholders-list ordered=false}}
  `);

  assert.ok(this.$('ul > [data-test-ember-content-placeholders-list-item]').length, 'ul rendered');
});

test('it renders an ordered list when ordered=true', function(assert) {
  this.render(hbs`
    {{content-placeholders-list ordered=true}}
  `);

  assert.ok(this.$('ol > [data-test-ember-content-placeholders-list-item]').length, 'ol rendered');
});
