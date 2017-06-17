const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));

const DEBUG = !argv.release; //todo: check where it comes from

const POSTCSS_LOADER = 'postcss-loader?parser=postcss-scss',
  SASS_LOADER = `sass-loader?${JSON.stringify({
    sourceMap: DEBUG,
  })}`,

  AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 30',
    'Firefox >= 38',
    'Explorer >= 10',
    'iOS >= 7',
    'Opera >= 30',
    'Safari >= 8',
  ],

  GLOBALS = {
    'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
    'process.env.BROWSER': true,
    __DEV__: DEBUG,
    __SERVER__: false,
    __iconPrefix__: '"icon"',
  };

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js',
  ],
  output: {
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [    //todo: remove common plugins (for prod and dev) in another constant
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            modules: true, // CSS Modules https://github.com/css-modules/css-modules
            localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !DEBUG, // CSS Nano http://cssnano.co/options/
          })}`,
          POSTCSS_LOADER,
          SASS_LOADER,
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
    ],
  },
  postcss() {
    return [require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })];
  },
};
