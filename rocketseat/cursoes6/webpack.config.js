const path = require('path');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/public')
  },
  devServer:{
    contentBase: __dirname + '/public'
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