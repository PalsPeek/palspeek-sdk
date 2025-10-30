import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "iife"],  // builds both module types
  globalName: "PalspeekClient",
  dts: true,                // generate .d.ts type definitions
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: "dist",
  target: "es2020"
});

