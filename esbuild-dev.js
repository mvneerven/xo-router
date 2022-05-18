// https://esbuild.github.io/api/
const esbuild = require("esbuild");
const fs = require("fs");

console.log("Building");

esbuild
.build({
  entryPoints: ["src/router.js"],
  bundle: true,
  keepNames: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("Build succeeded");
    },
  },
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
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("Build succeeded");
    },
  },
  external: ["./node_modules/*"],
  outfile: "dist/index.js"
})
.catch((ex) => {
  console.error(ex);
  process.exit(1);
});

