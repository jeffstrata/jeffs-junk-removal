const { execSync } = require('child_process');
const path = require('path');

process.chdir(path.join(__dirname));
execSync('npx next dev -p 3004', { stdio: 'inherit' });
