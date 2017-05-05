// const path = require('path');
// const dist_dir = path.join(__dirname, 'public/dist');
// const src_dir = path.join(__dirname, 'src/components/Kennel.jsx');

// module.exports = {
//   devtool: 'source-map',
//   entry: src_dir,
//   output: {
//     filename: 'bundle.js',
//     path: dist_dir
//   },
//   resolve: {
//     extensions: [".js", ".json", ".jsx"]
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   }
// }



const path = require('path');

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
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  }
}