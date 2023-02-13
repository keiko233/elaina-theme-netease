import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

switch (process.argv[2]) {
  case "delete":
    fs.unlink("./public/manifest.json", function (err) {
      if (err) console.error("\x1B[31mDelete manifest.json err\x1B[0m");
      else console.log("\x1B[32mDelete success manifest.json on public\x1B[0m");
    });
    break;
  default:
    fs.copyFile("./manifest.json", "./public/manifest.json", function (err) {
      if (err) console.error("\x1B[31mCopy manifest.json err\x1B[0m");
      else console.log("\x1B[32mCopy success manifest.json to public\x1B[0m");
    });
    break;
}
