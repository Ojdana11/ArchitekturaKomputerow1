"use strict";
const webpack = require('webpack');
const path = require('path');


module.exports = {

    entry:  "./app/index.jsx",
    output: {
        path: path.join(__dirname, './resources/js'),
        filename: 'bundle.js',
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components|public)/,
            loader: "babel-loader"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        },
            {
                test: /\.css?$/,
                exclude: /(node_modules|bower_components|public)/,
                loader:['style-loader','css-loader']
            },],
    },

};