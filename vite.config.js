import { defineConfig } from "vite";
import { resolve } from 'path';
const root = resolve(__dirname)

export default defineConfig({
    build: {
        outDir: './docs',
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                en: resolve(root, "en.html"),
            },
        }
    }
});