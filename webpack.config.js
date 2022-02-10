// common env
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js' // 入口
  },

  devServer: {
    port: 1234,
    hot: true,
  },
  
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              esModule: true,
              url: true
            } 
          },
          {
            loader: 'sass-loader'
          }
        ]
      },

    ]
  },
  output: {
    filename: '[name].bundle.js', 
    path: path.resolve(__dirname,'./dist ')
  },
  resolve: {
    alias: {
      Components : path.resolve(__dirname, 'src/components/')
    }
  }
}