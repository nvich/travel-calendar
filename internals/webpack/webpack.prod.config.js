const webpack = require('webpack');
const yargs = require('yargs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const options = yargs
  .option('port', {
    default: '3000',
    type: 'string'
  })
  .argv;

const baseConfig = {
  entry: path.resolve(__dirname, '../../client/js/main.js'),
  output: {
    path: path.resolve(__dirname, '../../public'),
    publicPath: '/public/',
    filename: 'js/scripts.min.js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
        include: path.resolve(__dirname, '../../source/')
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    }),
    new ExtractTextPlugin(`[name].min.css`, {
      allowChunks: true
    })
  ],
  devtool: '#eval-source-map',
};

module.exports =  baseConfig;
