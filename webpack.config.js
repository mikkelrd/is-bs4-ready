let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');

let helpers = require('./config/helpers');

module.exports = {
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000,
  },

  entry: './main.ts',

  output: {
    path: helpers.root('build'),
    publicPath: '/',
    filename: 'main.js',
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file?name=/assets/img/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=/assets/font/[name].[ext]'
      },
      {
        test: /\.s?css$/,
        loader: 'raw!postcss?sourceMap=inline!sass?sourceMap'
      },
    ],
  },

  postcss: [
    autoprefixer({ browsers: 'last 2 versions' }),
    cssnano({ sourcemap: true }),
  ],

  tslint: {
    emitErrors: false, // set emitErrors to true to display errors as errors instead of warnings
    failOnHint: false, // if you want any file with tslint errors to break compilation
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        drop_console: true,
        dead_code: true,
        drop_debugger: true,
        unused: true,
      },
    }),
  ]
};
