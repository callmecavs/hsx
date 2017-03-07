'use strict'

const path = require('path')

const autoprefixer = require('autoprefixer')
const rucksack = require('rucksack-css')

const OptimizeJsPlugin = require('optimize-js-plugin')

const {
  DefinePlugin,
  LoaderOptionsPlugin,
  NamedModulesPlugin,

  optimize: {
    OccurrenceOrderPlugin,
    UglifyJsPlugin
  }
} = require('webpack')

const isDev = !process.argv.includes('-p')

const config = {
  content: __dirname + '/src',

  entry: {
    main: './index.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },

  resolve: {
   extensions: ['.js', '.scss']
 },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              plugins: [
                'transform-react-jsx'
              ]
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 8 * 1024
            }
          }, {
            loader: 'image-webpack-loader',
            query: {
              interlaced: true,
              progressive: true,

              mozjpeg: {
                quality: '90'
              },

              pngquant: {
                quality: '90',
                speed: '4'
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      'DEV': isDev,
      'PROD': !isDev
    }),

    new LoaderOptionsPlugin({
      options: {
        postcss: [
          rucksack({
            inputPseudo: false,
            quantityQueries: false
          }),
          autoprefixer()
        ]
      }
    }),

    new NamedModulesPlugin(),

    new OccurrenceOrderPlugin(true),

    // production only plugins
    ...isDev
      ? []
      : [
        new UglifyJsPlugin({
          comments: false,
          compress: {
            screw_ie8: true,
            warnings: false
          }
        }),

        new OptimizeJsPlugin({
          sourceMap: false
        })
      ]
  ],

  cache: isDev ? true : false,

  devtool: isDev ? 'cheap-module-eval-source-map' : false,

  devServer: {
    contentBase: __dirname,
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },

  target: 'web'
}

module.exports = config
