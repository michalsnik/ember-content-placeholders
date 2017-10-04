import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fake-content', 'Integration | Component | fake content', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fake-content}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#fake-content}}
      template block text
    {{/fake-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
