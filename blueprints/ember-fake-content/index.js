/* eslint-env node */
'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    const dependencies = this.project.dependencies();
    const importStatement = '\n@import "ember-fake-content";\n';

    if ('ember-cli-sass' in dependencies) {
      const stylesPath = path.join('app', 'styles');
      const appStyles = path.join(stylesPath, 'app.scss');

      if (fs.existsSync(appStyles)) {
        this.ui.writeLine(`Added import statement to ${appStyles}`);
        return this.insertIntoFile(appStyles, importStatement, {});
      } else {
        fs.mkdirSync(stylesPath);
        fs.writeFileSync(appStyles, importStatement);
        this.ui.writeLine(`Created ${appStyles}`);
      }
    }
  }
};
