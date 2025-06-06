// pages/api/markdown.ts (or /src/pages/api/markdown.ts)
// ----------------------------------------------------
import runCors from "./cors.ts";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export default async function handle(req, res) {
  try {
    await runCors(req, res);
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Expect a query param ?file=somefile.md
    const { file } = req.query;
    console.log(req.query);
    const fileName = Array.isArray(file) ? file[0] : file;

    if (!fileName || !fileName.endsWith(".md")) {
      return res.status(400).json({ error: "Invalid or missing .md filename" });
    }

    // Construct an absolute path to your markdown folder
    // (adjust “content” to whatever directory you keep your .md files in)
    const markdownDir = path.join(process.cwd(), "");
    const fullPath = path.join(markdownDir, fileName);

    // Read the file from disk
    const raw = await fs.readFile(fullPath, "utf-8");

    // Parse frontmatter + content
    const { data, content } = matter(raw);

    res.status(200).json({ data, content });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}
