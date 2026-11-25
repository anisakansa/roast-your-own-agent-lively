import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent roasted itself, filed an expense claim for emotional damage, and approved it.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");
