//const express = require('express')
const webpack = require('webpack')
    //const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackDevServer = require('webpack-dev-server');
//const app = express();
const config = require('./webpack.config.js')
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));
server.listen(3000, 'localhost', function() {
    console.log('express app listening on port 3000!\n')
})