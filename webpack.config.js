const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    performance: { hints: false },

    output: {
        // publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|svg|jpg|jpe?g|gif)$/i,
                include: path.join(__dirname, 'app'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    },
                ],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                include: path.join(__dirname, 'app'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                        }
                    },
                ],
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },

    devServer: {

        static: {
            directory: path.join(__dirname, 'build'),
        },

        // compress: true,
        port: 9000,
        devMiddleware: {
            writeToDisk: true,
            stats: 'errors-only',
        },
        open: true,

    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/projects.html',
            filename: 'projects.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/project-details.html',
            filename: 'project-details.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/blog.html',
            filename: 'blog.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/blog-details.html',
            filename: 'blog-details.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/add-blog.html',
            filename: 'add-blog.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default']
        }),

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ],
};