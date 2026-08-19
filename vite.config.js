import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'Live',
    emptyOutDir: true,
    assetsDir: 'static',
    sourcemap: false,
  },
  // Configure esbuild to treat both .js and .jsx files in src as JSX
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: 'jsx',
                contents: await fs.promises.readFile(args.path, 'utf8'),
              };
            });
          },
        },
      ],
    },
  },
});
