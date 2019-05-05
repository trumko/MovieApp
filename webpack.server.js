const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  resolve: {
    modules: ['src'],
  },
  // context: path.join(__dirname, 'src'),
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
