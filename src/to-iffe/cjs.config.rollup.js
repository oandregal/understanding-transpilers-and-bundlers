import commonjs from 'rollup-plugin-commonjs';

export default {
  name: 'rollupIIFE',
  input: 'src/to-iffe/cjs.input.js',
  output: {
    file: 'src/to-iffe/cjs.output.rollup.js',
    format: 'iife',
  },
  plugins: [commonjs()],
};
