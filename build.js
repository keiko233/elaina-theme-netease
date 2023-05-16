import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

function copyFile(filePath, copyPath) {
  fs.copyFile("./" + filePath, "./" + copyPath + "/" + filePath, function (err) {
    if (err) console.error("\x1B[31mCopy " + filePath + " file err\x1B[0m\n" + err);
    else console.log("\x1B[32mCopy " + filePath + " file success\x1B[0m");
  });
}

function deleteFile(filePath) {
  fs.unlink("./" + filePath, function (err) {
    if (err) console.error("\x1B[31mDelete " + filePath + " file err\x1B[0m\n" + err);
    else console.log("\x1B[32mDelete " + filePath + " file success\x1B[0m");
  });
}

function touchManifest() {
  const manifest = packageJson.ncm;
  manifest.version = packageJson.version;
  manifest.author = packageJson.author;
  fs.writeFile('./dist/manifest.json', (JSON.stringify(manifest)), err => {
    if (err) console.error(err);
    else console.log("\x1B[32mmanifest.json created successfully.\x1B[0m");
  });
}

switch (process.argv[2]) {
  default:
    touchManifest();
    copyFile("preview.png", "dist");
    deleteFile("dist/index.html");
    break;
}