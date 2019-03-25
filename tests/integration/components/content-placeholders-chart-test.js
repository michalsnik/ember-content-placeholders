import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | content-placeholders-chart', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correct number of columns in a chart', async function(assert) {
    await this.render(hbs`
    {{content-placeholders-chart columns=20}}
  `);

    assert.equal(this.$('[data-test-ember-content-placeholders-chart-column]').length, 20, 'it renders a 20 column chart');
  });
});
