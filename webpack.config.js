var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var basewepback = {
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    }
}
if (process.env.NODE_ENV !== 'production') {
    basewepback.entry = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './app.js'
    ]
    basewepback.devtool = "cheap-module-eval-source-map";
    basewepback.devServer = {
        host: 'localhost',
        port: 8000,
        hot: true,
        publicPath: '/static'
    }
    basewepback.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
} else {
    basewepback.devtool = "cheap-module-source-map";
}
module.exports = basewepback

