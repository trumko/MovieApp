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
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', "sass-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000'
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
      extensions: ['.js'],
      modules: [
        'node_modules',
        path.resolve(__dirname, './src'),
      ]
    },

    watch: false
  }
}
