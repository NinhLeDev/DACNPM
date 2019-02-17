module.exports = {
  module: {
    loaders: [
      { test: /\.css$/,
        include: [/node_modules/, /src/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules=true&camelCase=true', 'postcss-loader', 'sass-loader'],
        }),},
      // ...
    ]
  }
};