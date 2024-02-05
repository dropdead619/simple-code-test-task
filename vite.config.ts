import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      icons: path.resolve(__dirname, 'src', 'assets', 'icons'),
      images: path.resolve(__dirname, 'src', 'assets', 'images'),
    },
  },

  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    svgLoader(),
  ],

});
