const path = require('path');

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },

  module: {
    rules: [{
      test: /\.js$/, // include .js files
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "babel-loader",
      }]
    }]
  },
};