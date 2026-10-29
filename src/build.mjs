// Builds every page in src/pages into site/. Run: node src/build.mjs
import { readdir, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { layout } from "./layout.mjs";
import { logoMark } from "./ui.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, "..", "site");
const pagesDir = path.join(root, "pages");

await mkdir(path.join(out, "assets", "img"), { recursive: true });

const files = (await readdir(pagesDir)).filter((f) => f.endsWith(".mjs")).sort();
for (const f of files) {
  const { default: page } = await import(pathToFileURL(path.join(pagesDir, f)).href);
  await writeFile(path.join(out, page.file), layout(page), "utf8");
  console.log("built", page.file);
}

// favicon from the same mark used in the header
const fav = logoMark("").replace('class=""', 'xmlns="http://www.w3.org/2000/svg"').replace('viewBox="0 0 120 40"', 'viewBox="38 0 44 40"');
await writeFile(path.join(out, "assets", "img", "favicon.svg"), fav.trim(), "utf8");
