var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './www/js/mainPage/index.js'),
    output: {
        path: path.resolve(__dirname, './www/js'),
        filename: 'mainPage.js',
    },
    module: {
        loaders: [

            /*
             * 你可以在这配置别的加载器，写法是一样的
             * */
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            //     loader: 'file-loader'
            // },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

        ]

    },
    devtool: 'eval-source-map',
};