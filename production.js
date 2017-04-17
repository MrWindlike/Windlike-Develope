var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index : './src/js/index.js',
    document : './src/js/document.js'
  },
  output: { 
    path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: '/dist/',       //模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'js/[name].js',     //每个页面对应的主js的生成配置
    chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': ExtractTextPlugin.extract({
                     use: [{
                         loader: "css-loader"
                     }, {
                         loader: "sass-loader"
                     }],
                     // use style-loader in development
                     fallback: "vue-style-loader"
                  }),
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        //配置css的抽取器、加载器。'-loader'可以省去
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: 'css-loader'
        }) 
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        //文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('css/[name].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        chunks: ['index','document'], //提取哪些模块共有的部分
        minChunks: 2 // 提取至少3个模块共有的部分
      }),
      new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
        filename: './index.html', //生成的html存放路径，相对于path
        template: './src/index.html', //html模板路径
        inject: 'body', //js插入的位置，true/'head'/'body'/false
        hash: true, //为静态资源生成hash值
        chunks: ['vendors', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
        minify: { //压缩HTML文件  
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: false //删除空白符与换行符
        }
      }),
      new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
        filename: './document.html', //生成的html存放路径，相对于path
        template: './src/document.html', //html模板路径
        inject: 'body', //js插入的位置，true/'head'/'body'/false
        hash: true, //为静态资源生成hash值
        chunks: ['vendors', 'document'],//需要引入的chunk，不配置就会引入所有页面的资源
        minify: { //压缩HTML文件  
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: false //删除空白符与换行符
        }
      })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './',
    host: 'localhost',
    inline: true,
    hot: true,
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
     new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
  ])
}
