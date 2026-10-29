// Minimal static server for previewing site/. Run: node src/serve.mjs [port]
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "site");
const port = Number(process.argv[2]) || 4173;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".mp4": "video/mp4", ".webm": "video/webm" };

http
  .createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    const file = path.join(root, path.normalize(p));
    if (!file.startsWith(root)) return res.writeHead(403).end();
    try {
      const s = await stat(file);
      const ext = path.extname(file);
      const range = req.headers.range;
      const data = await readFile(file);
      if (range && (ext === ".mp4" || ext === ".webm")) {
        const [a, b] = range.replace("bytes=", "").split("-");
        const start = Number(a), end = b ? Number(b) : s.size - 1;
        res.writeHead(206, { "Content-Type": types[ext], "Content-Range": `bytes ${start}-${end}/${s.size}`, "Accept-Ranges": "bytes", "Content-Length": end - start + 1 });
        return res.end(data.subarray(start, end + 1));
      }
      res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream", "Cache-Control": "no-cache" });
      res.end(data);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
    }
  })
  .listen(port, () => console.log(`PPA site on http://localhost:${port}`));
