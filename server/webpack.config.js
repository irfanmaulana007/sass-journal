const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
    entry: './server.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    resolve: {
        alias: {
            Controllers: path.resolve(__dirname, 'src/controllers/'),
            Middleware: path.resolve(__dirname, 'src/middleware/'),
            Config: path.resolve(__dirname, 'src/config/'),
            Services: path.resolve(__dirname, 'src/services/')
        }
    },
    module: {
        rules: [
            {
                // look for .js files
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new NodemonPlugin()
    ]
}