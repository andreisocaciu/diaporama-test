module.exports = {
    entry: './app.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.json?$/,
                loader: 'json-loader',
            }
        ],
    },
    output: {
        filename: 'bundle.js'
    }
};
