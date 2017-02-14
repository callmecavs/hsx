const webpack = require('webpack')

const config = {
  entry: {
    main: './entry.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + 'dist'
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
      }
    ]
  }
}

module.exports = config
