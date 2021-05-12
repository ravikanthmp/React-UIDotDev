const HtmlWebpackPlugin = require("html-webpack-plugin");
path = require('path');
module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'index_bundle.js',
        publicPath: '/'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            ['@babel/preset-react']
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    mode : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template : 'app/index.html'
        })
    ],
    devServer: {
        historyApiFallback : true
    }
}