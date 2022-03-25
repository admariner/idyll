import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
      name: 'idyll-compiler',
      exports: 'auto'
    },
    {
      file: 'dist/esm/index.mjs',
      format: 'esm',
      sourcemap: true,
      exports: 'auto'
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs()
  ]
};
