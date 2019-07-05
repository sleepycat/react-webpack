const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')

module.exports = ({ mode }) => {
  return {
    mode,
    output: {
      filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin(), new HtmlWebpackRootPlugin()],
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
