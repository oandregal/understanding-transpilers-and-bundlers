export default {
  name: 'rollupIIFE',
  input: 'src/to-iffe/esm.input.js',
  output: {
    file: 'src/to-iffe/esm.output.rollup.js',
    format: 'iife',
  },
};
