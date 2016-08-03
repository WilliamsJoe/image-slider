var webpack = require('webpack');

var config = {
    context: __dirname + '/app',
    entry: './slider/image-slider.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'] } },
            { test: /\.styl$/, exclude: /node_modules/, loader: 'style!css!stylus' }
        ]
    },

    devtool: 'source-map'
};

module.exports = config;
