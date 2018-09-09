const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    //entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    /*开启使用 source map来观察错误devtool: 'inline-source-map'定位错误出现在未打包之前的哪个文件*/
    devtool: 'inline-source-map',
    /*安装webpack-dev-server用于实时更新并刷新文件，再配置文件为devServer:{contentBase:'./dist'}并需要在webpack配置文件中配置启动的端口并运行在本地服务器里面"start": "webpack-dev-server --open",*/
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                include: path.resolve("node_modules", "lodash"),
                sideEffects: false
            }
        ]
    },
    output: {
        //filename: 'main.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    plugins: [
        /*新增一个html-webpack-plugin用以解决导入文件新的命名问题*/
        new HtmlWebpackPlugin({
            title: 'output manage'
        }),
        /*添加热模块替换插件*/
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        /*新增一个clean-webpack-plugin插件用以清除打包前清除dist中冗余文件的插件*/
        new CleanWebpackPlugin(['dist']),


    ],
    mode: "production"

};