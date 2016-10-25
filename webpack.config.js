let precss = require('precss');
let postcssImport = require('postcss-import');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './web/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function (webpack) {
        return [
            postcssImport({ addDependencyTo: webpack }), // Must be first item in list
            precss
        ];
    },
 };
