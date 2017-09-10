var webpack = require('webpack')

module.exports = {
    entry:{
        main: './index.js'
    },
    output:{
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules\//,
                loader: 'babel'
            },
            {   test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ["antd", {"style": "css"}]]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
    ]
}
