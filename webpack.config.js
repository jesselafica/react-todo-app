var webpack = require('webpack');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path:__dirname,
    filename: './dist/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Checklist: 'app/components/Checklist.jsx',
      Form: 'app/components/Form.jsx',
      appStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015', 'stage-0' ]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
