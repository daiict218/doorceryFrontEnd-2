var webpack = require('webpack');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release; //todo: check where it comes from

const STYLE_LOADER = 'style-loader/useable',
  CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize',
//DYNAMIC_STYLE_LOADER = 'dynamic-style-loader',
  POSTCSS_LOADER = 'postcss-loader?parser=postcss-scss',
  SASS_LOADER = `sass-loader?${JSON.stringify({
    sourceMap: DEBUG
  })}`,
  AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 30',
    'Firefox >= 38',
    'Explorer >= 10',
    'iOS >= 7',
    'Opera >= 30',
    'Safari >= 8'
  ],

  PWD = process.env.PWD;

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  output: {
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //{
      //  test: /\.scss$/,
      //  exclude: /node_modules/,
      //  loader: `${STYLE_LOADER}!${CSS_LOADER}!${AUTOPREFIXER_LOADER}!sass-loader`
      //},
      //{
      //  test: /\.scss$/,
      //  exclude: /node_modules/,
      //  loader: `sass-loader`,
      //  query: {
      //    modules: true,
      //    localIdentName: '[name]__[local]___[hash:base64:5]'
      //  }
      //},
      {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            modules: true, // CSS Modules https://github.com/css-modules/css-modules
            localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !DEBUG // CSS Nano http://cssnano.co/options/
          })}`,
          POSTCSS_LOADER,
          SASS_LOADER
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }
    ]
  },
  postcss() {
    return [require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })];
  }
};