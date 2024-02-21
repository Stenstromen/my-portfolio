/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

const folders = ['Projects', 'Contact', 'pgp', 'k8s', 'det-blev-ingen-cd'];

folders.forEach(folder => {
  const folderPath = path.join(buildDir, folder);
  const indexPath = path.join(folderPath, 'index.html');
  const newFilePath = path.join(buildDir, `${folder}.html`);

  fs.renameSync(indexPath, newFilePath);

  fs.rmdirSync(folderPath, { recursive: true });
});

console.log('Post-build processing completed.');
