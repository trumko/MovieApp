const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  console.log('env', env);

  return {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: "./index.html"
      }),

      new webpack.DefinePlugin({
        env: JSON.stringify(env.development ? 'development' : 'production')
      })
    ],

    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'build'),
      publicPath: '/'
    },

    resolve: {
      extensions: ['.js']
    },

    watch: false
  }
}
