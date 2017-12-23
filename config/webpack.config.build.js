var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var fs = require("fs");

// make sure symlinks are resolved
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

// CSS
var extractCSS = new ExtractTextPlugin("static/css/[name].[contenthash:8].css");
var extractThemeDark = new ExtractTextPlugin("static/css/[name]-dark.[contenthash:8].css");
var extractThemeLight = new ExtractTextPlugin("static/css/[name]-light.[contenthash:8].css");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: "./app/app.js"
    },
    output: {
        path: resolveApp("dist"),
        filename: "static/js/[name].[chunkhash:8].js",
        chunkFilename: "static/js/[name].[chunkhash:8].chunk.js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'resolve-url-loader']
                }),
                exclude: [/dark.css/, /light.css/]
            },
            {
                test: /dark.css/,
                use: extractThemeDark.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'resolve-url-loader']
                })
            },
            {
                test: /light.css/,
                use: extractThemeLight.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'resolve-url-loader']
                })
            },
            {
                test: /\.(png|jpg|jpeg|woff|woff2|eot|svg)$/,
                loader: "url-loader?limit=100000",
                query: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            },
            {
                test: /\.(svg|ttf)$/,
                loader: "file-loader",
                query: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           inject: true,
           template: './app/index.html'
        }),
        extractCSS,
        extractThemeDark,
        extractThemeLight
    ]
};
