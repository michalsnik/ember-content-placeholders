import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-placeholders-text', 'Integration | Component | content placeholders text', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{content-placeholders-text lines=6}}
  `);

  assert.equal(this.$('[data-test-ember-content-placeholders-text-line]').length, 6, 'it renders 6 lines of text');
});
