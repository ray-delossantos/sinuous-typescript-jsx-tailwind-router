// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import size from 'rollup-plugin-size';
import {
  terser
} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import svg from 'rollup-plugin-svg'

export default {
  input: 'src/app.tsx',
  watch: {
    clearScreen: false
  },
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    size(),
    nodeResolve(),
    commonjs(),
    terser(),
    postcss({
      plugins: []
    }),
    copy({
      targets: [
        { src: 'public/**/*', dest: 'dist/' },
      ]
    }),
    svg({base64: true}),
    typescript(),
  ]
};