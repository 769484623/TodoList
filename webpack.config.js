const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry:{
        index:"./index.js"
    },
    output: {
        filename: "static/js/[name].js"
    },
    resolve: {
        extensions: [".js",".vue"],
        modules: ['node_modules']
    },
    devServer: {
        inline:true,
        port:3000
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./index.html",
            inject:true,
            filename:"index.html",
            chunks:["index"]
        }),
    ]
};