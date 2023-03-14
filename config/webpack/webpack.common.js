const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve('src/index'),
  output: {
    path: path.resolve('build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|jpg|jpeg|png|gif|eot|ttf|woff|woff2)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('public'),
          to: '.',
          globOptions: {
            ignore: [path.resolve('public/index.html')],
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
};
