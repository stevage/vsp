CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    publicPath: '',
    devServer: {
        historyApiFallback: false,
        port: 8012
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {
                    // because the images aren't statically referred to anywhere, they don't bundled by webpack
                    // so we have to explicitly copy them to where we want them
                    from: 'src/static',
                    to: 'static',
                    transformPath: (targetPath, absolutePath) =>
                        targetPath.toLowerCase()
                }
            ])
        ]
    }
};
