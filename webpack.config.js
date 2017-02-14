const webpack = require('webpack')

const isDev  = !process.argv.includes('-p')

const config = {
  entry: {
    main: './entry.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + 'dist',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|hsx)$/,
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
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 8 * 1024
            }
          }
        ]
      }
    ]
  },

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
