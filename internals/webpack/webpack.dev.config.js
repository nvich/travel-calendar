const webpack = require('webpack');
const yargs = require('yargs');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const options = yargs
  .option('port', {
    default: '3000',
    type: 'string'
  })
  .argv;

const baseConfig = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../../client/js', 'main')
  ],
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'js/scripts.min.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    },
    extensions: ['.js', '.vue', '.scss']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['vue', 'es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.vue/,
        exclude: /(node_modules)/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../../source/'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname, './config/postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf)$/,
        include: path.resolve(__dirname, '../../source/'),
        exclude: /(node_modules)/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'Campaign Dev',
      filename: 'index.html',
      template: 'public/index.dev.ejs'
    })
  ],
  devtool: 'source-map',
};

module.exports =  baseConfig;
