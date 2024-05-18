const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: 'server.js'
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/')
    }
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};