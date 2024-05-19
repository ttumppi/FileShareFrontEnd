import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

// For ES modules, __dirname and __filename are not available, so we need to get them using the following workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/html-app.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'html-app.js',
  },
  resolve: {
    fallback: {
      fs: false,
      path: 'path-browserify',
      os: 'os-browserify/browser',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert/',
      http: 'stream-http',
      https: 'https-browserify',
      url: 'url/',
      buffer: 'buffer/',
      util: 'util/',
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};