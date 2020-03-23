const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'campo-ui': ['./src/js/campo-ui.js', './src/css/campo-ui.scss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.MINIMIZE == 'true' ? '[name].min.js' : '[name].js'
  },
  devtool: 'source-map',
  optimization: {
    minimize: process.env.MINIMIZE == 'true',
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: process.env.MINIMIZE == 'true' ? '[name].min.css' : '[name].css'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
