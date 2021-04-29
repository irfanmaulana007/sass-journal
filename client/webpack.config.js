const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
        watchContentBase: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true,
        }
    },
    resolve: {
        alias: {
            Actions: path.resolve(__dirname, 'src/actions/'),
            Commons: path.resolve(__dirname, 'src/commons/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Containers: path.resolve(__dirname, 'src/containers/'),
            FakeData: path.resolve(__dirname, 'src/fake_data/'),
            Store: path.resolve(__dirname, 'src/store/'),
            Views: path.resolve(__dirname, 'src/views/')
        }
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                // look for .js or .jsx files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // look for .css or .scss files
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};