/* eslint-disable no-undef */
import fs from "fs";
import routes from "./routes.js";
import path from "path";

const buildDir = path.join(process.cwd(), "build");

const folders = routes;

folders.forEach((folder) => {
  const folderPath = path.join(buildDir, folder);
  const indexPath = path.join(folderPath, "index.html");
  const newFilePath = path.join(buildDir, `${folder}.html`);

  fs.renameSync(indexPath, newFilePath);

  fs.rmSync(folderPath, { recursive: true });
});

console.log("Post-build processing completed.");
