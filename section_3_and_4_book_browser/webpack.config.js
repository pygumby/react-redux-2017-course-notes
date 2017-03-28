module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Original module section
  /* module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }, */
  // Fixed module section (see https://github.com/StephenGrider/ReduxSimpleStarter/issues/3)
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
