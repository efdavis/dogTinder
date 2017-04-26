const path = require('path');
const dist_dir = path.join(__dirname, '/public/dist');
const src_dir = path.join(__dirname, '/src/index.js');

module.exports = {
  devtool: 'source-map', //'eval'
  entry: src_dir,
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        //include:src_dir,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
}