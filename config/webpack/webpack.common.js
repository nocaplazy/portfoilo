const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        test: /\.(svg|jpg|png|gif|eot|ttf|woff|woff2)$/i,
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
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
};
