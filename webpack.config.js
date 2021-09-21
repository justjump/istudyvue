const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/assets/js/main1.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index1.js',
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
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
            }
        ],
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}