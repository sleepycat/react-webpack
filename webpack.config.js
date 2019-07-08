const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = ({ mode }) => {
  const { ifProduction, ifNotProduction } = getIfUtils(mode)

  return {
    mode,
    output: {
      filename: 'bundle.js',
    },
    resolve: removeEmpty({
      alias: ifNotProduction({
        'react-dom': '@hot-loader/react-dom',
      }),
    }),
    plugins: [new HtmlWebpackPlugin(), new HtmlWebpackRootPlugin()],
    devServer: {
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  }
}
