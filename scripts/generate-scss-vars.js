/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const variablesJson = require('../config/variables.json');

const scss = Object.entries(variablesJson)
    .map(([key, value]) => `$${key}: ${value};`)
    .join('\n');

const ts = Object.entries(variablesJson)
    .map(([key, value]) => `export const ${key.replaceAll('-', '_').toUpperCase()} = "${value}";`)
    .join('\n');

const warningComment =
    '// The values in this file is retrieved from ./config/variables.json, generated via ./scripts/generate-scss-vars.js, DO NOT EDIT\n';

fs.writeFileSync('./src/styles/_variables.scss', warningComment);
fs.appendFileSync('./src/styles/_variables.scss', scss);
fs.writeFileSync('./src/constants/variables.ts', warningComment);
fs.appendFileSync('./src/constants/variables.ts', ts);
