// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import size from 'rollup-plugin-size';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/app.tsx',
  watch: {
    clearScreen: false
  },
  output: {
    dir: 'dist',
    format: 'iife'
  },
  plugins: [
    size(),
    nodeResolve(),
    typescript(),
    terser()
  ]
};
