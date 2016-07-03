var path = require('path');
var cwd = process.cwd();
var localip = require('my-local-ip')();
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {

    entry: {
        app: getEntrySources([
            './js/main.js'
        ])
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['jsx', 'babel'],
                exclude: /node_modules/
            },
			{
	            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
	            loader : 'file-loader'
	        },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
            },
            {
            	test: /\.json$/,
            	loader: 'json-loader'
            }
        ]
    },

    postcss: function () {
    	return [precss, autoprefixer];
    },

    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
  		})
    ],

    output: {
    	path: path.join(cwd, 'public'),
        filename: 'main.js',
        chunkFilename: "[id].js"
    },

    resolve: {
    	extensions: ['', '.js', '.jsx', '.json', '.scss'],
        alias: {
            'react': cwd + '/node_modules/react'
        }
    }
};