import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

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

const fileList = [
  {
    from: "manifest.json",
    to: "public"
  },
  {
    from: "preview.png",
    to: "public"
  }
]

switch (process.argv[2]) {
  case "delete":
    for (var i = 0; i < fileList.length; i++) {
      deleteFile(fileList[i].to + "/" + fileList[i].from);
    }
    break;
  default:
    for (var i = 0; i < fileList.length; i++) {
      copyFile(fileList[i].from, fileList[i].to);
    }
    break;
}
