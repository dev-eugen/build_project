module.exports = {
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true,
    buildHttp: true,
    layers: true,
    lazyCompilation: true,
    outputModule: true,
    syncWebAssembly: true,
  },
  module: {
    experiments: {
      topLevelAwait: true,
      asyncWebAssembly: true,
      buildHttp: true,
      layers: true,
      lazyCompilation: true,
      outputModule: true,
      syncWebAssembly: true,
    },
    rules: [

      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
}