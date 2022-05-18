// https://esbuild.github.io/api/
const esbuild = require("esbuild");

console.log("Building");

esbuild
.build({
  entryPoints: ["src/router.js"],
  bundle: true,
  keepNames: true,
  minify: true,
  external: ["./node_modules/*"],
  outfile: "dist/xo-router.js"
})
.catch((ex) => {
  console.error(ex);
  process.exit(1);
});

esbuild
.build({
  entryPoints: ["src/app/index.js"],
  bundle: true,
  keepNames: true,
  minify: true,
  external: ["./node_modules/*"],
  outfile: "dist/index.js"
})
.catch((ex) => {
  console.error(ex);
  process.exit(1);
});

