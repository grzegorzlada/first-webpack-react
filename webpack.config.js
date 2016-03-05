var webpack = require("webpack");

module.exports = {
    entry: ['webpack/hot/dev-server', './src/index.jsx'],
    output: {
        path: 'builds',
        filename: 'bundle.js',
        publicPath: '/builds/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
    presets: ['react']
  }
            },
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
            }
        ]
    },
//    externals: {
//        //don't bundle the 'react' npm package with our bundle.js
//        //but get it from a global 'React' variable
//        'react': 'React'
//    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devtool: "source-map"
};
