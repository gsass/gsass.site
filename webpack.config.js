const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Vue+Webpack compatibility
  resolve: {
    alias: {                
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  // Set Vue FFs explicity
  plugins: [
    new webpack.DefinePlugin({
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false,
    }),
  ],
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
