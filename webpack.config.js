const I18nPlugin = require('i18n-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const languages = require('./src/locales/index');

module.exports = Object.keys(languages).map(language => ({
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
    ],
  },
  name: language,
  output: {
    filename: `${language}.bundle.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new I18nPlugin(languages[language], {
      nested: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      // '@components': path.resolve(__dirname, 'src/components/'),
      // '@screens': path.resolve(__dirname, 'src/screens/'),
      '@src': path.resolve(__dirname, 'src/'),
      // '@typings': path.resolve(__dirname, 'typings/'),
    },
    extensions: ['.js', '.ts', '.vue'],
  },
}));
