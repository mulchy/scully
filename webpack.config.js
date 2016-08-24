var path = require('path');
module.exports = {
  entry: {
    javascript: './src/client/js/index.jsx',
    html: './src/client/html/index.html',
    css: './src/client/css/styles.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
