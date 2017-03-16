/**
 * Created by aresn on 16/7/5.
 */

var path = require('path');
var webpack = require('webpack');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router', 'iview', 'highlightjs/highlight.pack.js', 'clipboard']
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist')
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'hljs': 'highlightjs/highlight.pack.js',
            'iCode': '../../components/code.vue',
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
};