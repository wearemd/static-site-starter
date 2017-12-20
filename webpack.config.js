const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './js/app.js'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'site/js') 
  }
}