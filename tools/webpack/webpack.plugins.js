const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = [
  new DefinePlugin({
    'process.env': JSON.stringify(dotenv.config().parsed),
  }),
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    favicon: 'src/assets/images/logo.png',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
];
