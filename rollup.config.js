// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { terser as pluginTerser } from "rollup-plugin-terser";

export default [
  {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',

    // minify用プラグインを追加で実行する
    plugins: [
      pluginTerser(),
    ],
  },
  plugins: [typescript()]
}

];
