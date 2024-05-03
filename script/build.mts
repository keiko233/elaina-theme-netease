import * as fs from "fs";
import { consola } from "./utils";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));

function copyFile(filePath: string, copyPath: string): void {
  consola.info(`copying ${filePath}`);
  fs.copyFileSync(`./${filePath}`, `./${copyPath}/${filePath}`);
}

function deleteFile(filePath: string): void {
  consola.info(`deleting ${filePath}`);
  fs.unlinkSync(`./${filePath}`);
}

function touchManifest(): void {
  const manifest: any = {
    ...packageJson.ncm,
    version: packageJson.version,
    author: packageJson.author,
  };

  consola.info(`touching manifest`);

  fs.writeFileSync("./dist/manifest.json", JSON.stringify(manifest));
}

switch (process.argv[2]) {
  default:
    touchManifest();
    // copyFile("preview.png", "dist");
    deleteFile("dist/index.html");
    break;
}
