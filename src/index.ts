
#!/usr/bin/env node
import { runRAG } from "./core";
import * as fs from "fs";

const args = process.argv.slice(2);
if (args[0] !== "run" || !args[1]) {
  console.error("Usage: npx contextforge run <prompt>");
  process.exit(1);
}
const prompt = args.slice(1).join(" ");
const mcp = fs.readFileSync("examples/mcp.yaml", "utf8");
runRAG(mcp, prompt).then(res => console.log(res)).catch(err => console.error(err));
