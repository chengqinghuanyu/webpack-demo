const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: / \.(png | svg | jpg | gif) $ /,
            //     use: { loader: 'url-loader?limit=8000' }
            // }
            {
                test: /\.(png|svg|jpg|gif)$/,
                // use: {
                //     loader: 'url-loader?limit=8000'
                // }
                use: ['file-loader']
                    //loader: "url-loader?mimetype=image/png" //转base64
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }

        ]
    }

};