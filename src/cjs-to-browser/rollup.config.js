import commonjs from 'rollup-plugin-commonjs';

export default {
  name: 'rollupIIFE',
  input: 'src/cjs-to-browser/input.js',
  output: {
    file: 'src/cjs-to-browser/output.rollup.js',
    format: 'iife',
  },
  plugins: [commonjs()],
};
