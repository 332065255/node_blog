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
            // {
            //     test: /\.(jsx|js)$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/,
            //     query: {
            //         presets: ['es2015', 'react']
            //     }
            // },
            { test: /\.js?$/, loaders: ['babel-loader'] }, //babel加载器可以把jsx的语法转换为js的语法，也可以把es6的语法标准转换es5的语法标准
            /*
             * 你可以在这配置别的加载器，写法是一样的
             * */
            { test: /\.vue?$/, loaders: ['vue-loader'] },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

        ]

    },
    devtool: 'eval-source-map',
};