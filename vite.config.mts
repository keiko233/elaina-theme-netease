import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    cssInjectedByJsPlugin(),
    wasm(),
    topLevelAwait(),
  ],
  worker: {
    // Not needed with vite-plugin-top-level-await >= 1.3.0
    // format: "es",
    plugins: () => [wasm(), topLevelAwait()],
  },
  build: {
    assetsDir: "./",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        format: "es",
        manualChunks: undefined,
        inlineDynamicImports: true,
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 102400,
    assetsInlineLimit: 102400,
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@root": path.resolve("."),
    },
  },
});
