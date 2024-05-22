import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/index.tsx"),
      name: "5e-plugin",
      formats: ["cjs"],
      fileName(format, entryName) {
        return `${entryName}.5e-plugin.js`;
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mantine/core",
        "@mantine/hooks",
        "@mantine/form",
        "react/jsx-runtime",
        "cognita-sdk",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
