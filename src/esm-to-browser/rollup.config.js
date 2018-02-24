export default {
  name: 'rollupIIFE',
  input: 'src/esm-to-browser/input.js',
  output: {
    file: 'src/esm-to-browser/output.rollup.js',
    format: 'iife',
  },
};
