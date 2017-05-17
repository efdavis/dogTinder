const path = require('path');
const Dotenv = require('dotenv-webpack');   // allows access to .env variables in React

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude:/(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },
  node: {
    fs: "empty" // Need this to prevent fs error with dotenv-webpack
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false // Need this to prevent CORS issue with using dotenv-webpack(?)
    })
  ],
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  }
}
