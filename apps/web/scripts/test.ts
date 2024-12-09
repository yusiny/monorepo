import path from "path";

async function main() {
  console.log("DIRECTORY >>", __dirname);

  const tsconfigPath = path.join(__dirname, "../", "tsconfig.json");
  console.log("TSCONFIG PATH >> ", tsconfigPath);
}

main();
