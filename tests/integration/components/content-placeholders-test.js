import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-placeholders', 'Integration | Component | content placeholders', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{content-placeholders}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#content-placeholders}}
      template block text
    {{/content-placeholders}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
