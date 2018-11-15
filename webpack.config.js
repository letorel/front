const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Travel app',
      template: require('html-webpack-template'),
      appMountId: 'app',
      meta: {
        viewport: 'width=device-width, height=device-height,initial-scale=1, minimum-scale=1, maximum-scale=1, minimal-ui',
        description: 'Starter Pack for React application',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        loaders: [{
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            context: './src/assets/',
          },
        }],
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: '0.0.0.0',
  },
};