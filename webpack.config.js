const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
    new MiniCssExtractPlugin()
  ],
};
