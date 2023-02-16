const path = require('path');

module.exports = {
  // Vue+Webpack compatibility
  resolve: {
    alias: {                
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  // Build Options
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: false,
  // Dev Server Config
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: false,
    port: 42069,
  },
};
