// pages/api/markdown.ts (or /src/pages/api/markdown.ts)
// ----------------------------------------------------
import runCors from "./runCors.js";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import type { Request, Response } from "express";

export default async function handle(req: Request, res: Response) {
  try {
    await runCors(req, res);
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Expect a query param ?file=somefile.md
    const { file } = req.query;
    const fileName = (Array.isArray(file) ? file[0] : file) as string;

    if (!fileName) {
      return res.status(400).json({ error: "Invalid or missing .md filename" });
    }

    console.log(fileName);
    const raw = await fs.readFile(fileName, "utf-8");
    // Parse frontmatter + content
    const { data, content } = matter(raw);

    res.status(200).json({ data, content });
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}
