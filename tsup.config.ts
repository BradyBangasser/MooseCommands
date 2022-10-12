import { defineConfig } from "tsup";
const minify = false

export default defineConfig({
    entry: ["src/index.ts"],
    dts: true,
    format: ["esm", "cjs"],
    outDir: "./dist",
    clean: true,
    sourcemap: false,
    minify: minify,
    minifySyntax: minify,
    minifyWhitespace: minify
})