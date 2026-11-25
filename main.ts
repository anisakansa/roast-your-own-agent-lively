import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent roasted itself, filed an expense claim for emotional damage, and approved it.";

// Gate: the entry must be 1-140 characters of non-blank UTF-8 text.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`roast line is ${LINE.length} characters, outside the 1-140 gate`);
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");
