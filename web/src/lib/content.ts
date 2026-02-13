import fs from "fs";
import path from "path";

export function getPhaseContent(slug: string): string {
  const filePath = path.join(process.cwd(), "src", "content", `${slug}.md`);
  return fs.readFileSync(filePath, "utf-8");
}

export function getReadmeContent(): string {
  const filePath = path.join(process.cwd(), "src", "content", "readme.md");
  return fs.readFileSync(filePath, "utf-8");
}
