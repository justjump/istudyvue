const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/assets/js/todo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [{
                  loader: 'style-loader'
                }, {
                  loader: 'css-loader'
                }, {
                  loader: 'px2rem-loader',
                  // options here
                  options: {
                    remUnit: 37.5,
                    remPrecision: 2
                  }
                }]
              }
           
        ],
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions:[".css",".js",".vue"],//导入的时候省略扩展名
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    devServer:{
        static:  "./dist",
        port:'8856',
    }
}