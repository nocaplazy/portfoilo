const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: 'static/js/build.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, '../build'),
    port: 3000,
    historyApiFallback: true,
  },
};
