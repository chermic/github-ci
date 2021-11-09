const fs = require('fs');
const path = require('path');

fs.mkdirSync('dist');
fs.writeFileSync(
  path.resolve(__dirname, '../dist/out-file.json'),
  JSON.stringify({ foo: 'bar' })
);
