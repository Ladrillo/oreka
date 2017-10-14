var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: __dirname + '/src',

  output: {
    path: __dirname + '/build',
    filename: 'build.js'
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    })
  ],

  devtool: 'source-map',

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: false
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=800'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }
};