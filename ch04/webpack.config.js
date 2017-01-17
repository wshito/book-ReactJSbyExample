var webpack = require('webpack');

module.exports = {
    entry: {
      "devserver": [ "webpack-dev-server/client?http://localhost:9000",
                     "webpack/hot/dev-server"],
      "index-p66": __dirname + "/src/index-p66.tsx",
      "index-p68-70": __dirname + "/src/index-p68-70.tsx"
    },
    output: {
      // devserver.js, index-p66.js, index-p68-70.js
      filename: "[name].js",
      path: __dirname + "/asset", // install it under /asset directory.
      publicPath: '/asset/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loaders: ["react-hot", "awesome-typescript-loader"] }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
