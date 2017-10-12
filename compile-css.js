/* eslint-env node */
const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'app', 'styles', 'ember-content-placeholders.scss');
const outputFile = path.join(__dirname, 'vendor', 'ember-content-placeholders.css');
const buf = fs.readFileSync(inputFile, 'utf8');

var result = sass.renderSync({
  data: buf,
  includePaths: ['app/styles']
});

fs.writeFileSync(outputFile, result.css);
