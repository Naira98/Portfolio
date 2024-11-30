#!/usr/bin/env node
import fs from "fs/promises";
import { resolve } from "path";

const supportedExtensions = [".png", ".jpg", ".jpeg", ".svg", ".webp", ".mp4"];

/**
 * @param filename {string}
 * @returns {boolean}
 */
function hasSupportedExtension(filename) {
  const filenameLower = filename.toLowerCase();

  for (const extension of supportedExtensions) {
    if (filenameLower.endsWith(extension)) return true;
  }

  return false;
}

async function run(dir = import.meta.dirname) {
  const files = await fs.readdir(dir);

  /** @type {string[]} */
  const exportLines = [];

  await Promise.all(
    files.map(async (file) => {
      const path = resolve(dir, file);
      const stat = await fs.stat(path);

      if (stat.isDirectory()) {
        await run(path);

        let importName = file.replaceAll(/[^a-zA-Z0-9]+/g, "");

        exportLines.push(`export * as ${importName} from './${file}';`);
      } else if (hasSupportedExtension(file)) {
        let importName = file
          .split(".")
          .slice(0, -1)
          .join(".")
          .replaceAll(/[^a-zA-Z0-9]+/g, "");

        exportLines.push(
          `export { default as ${importName} } from './${file}';`,
        );
      }
    }),
  );

  let content = exportLines.join("\n");
  fs.writeFile(resolve(dir, "index.ts"), content);
}

run();
