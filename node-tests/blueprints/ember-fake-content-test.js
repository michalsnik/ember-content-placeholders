'use strict';

const fs = require('fs');
const path = require('path');
const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const chai = require('ember-cli-blueprint-test-helpers/chai');

const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerate = blueprintHelpers.emberGenerate;
const modifyPackages = blueprintHelpers.modifyPackages;

const file = chai.file;
const expect = chai.expect;

const args = ['ember-fake-content'];

function createStyleFixture(name) {
  const stylesPath = path.join('app', 'styles');
  if (!fs.existsSync(stylesPath)) {
    fs.mkdirSync(stylesPath);
  }
  fs.writeFileSync(path.join(stylesPath, name), 'body { color: red; }');
}

describe('Acceptance: ember generate ember-fake-content', function() {
  setupTestHooks(this);

  it('skips blueprint when no preprocessor present', function() {
    return emberNew()
      .then(() => emberGenerate(args, (file) => {
        expect(file('app/styles/app.scss')).to.not.exist;
      }));
  });

  it('creates app.scss if not existing', function() {
    return emberNew()
      .then(() => modifyPackages([
        { name: 'ember-cli-sass' }
      ]))
      .then(() => emberGenerate(args))
      .then(() => {
        expect(file('app/styles/app.scss'))
          .to.contain('@import "ember-fake-content";');
      });
  });

  it('adds @import to existing app.scss', function() {
    return emberNew()
      .then(() => modifyPackages([
        { name: 'ember-cli-sass' }
      ]))
      .then(() => createStyleFixture('app.scss'))
      .then(() => emberGenerate(args, (file) => {
        expect(file('app/styles/app.scss')).to.contain('@import "ember-fake-content";');
      }));
  });
});
