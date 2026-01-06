/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const variablesJson = require('../config/variables.json');

const scss = Object.entries(variablesJson)
    .map(([key, value]) => `$${key}: ${value};`)
    .join('\n');

fs.writeFileSync('./src/styles/_variables.scss', scss);
