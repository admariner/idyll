import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
        name: 'idyll-ast'
      },
      {
        file: 'dist/esm/index.mjs',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**' // only transpile our source code
      }),
      json(),
      commonjs()
    ]
  },
  {
    input: 'v1/src/index.js',
    output: [
      {
        file: 'dist/cjs/v1/index.js',
        format: 'cjs',
        sourcemap: true,
        name: 'idyll-ast'
      },
      {
        file: 'dist/esm/v1/index.mjs',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**' // only transpile our source code
      }),
      json(),
      commonjs()
    ]
  }
];
