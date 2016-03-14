var path = require("path");

var config = {
    entry: [
        "./src/app.tsx"
    ],
    output: {
        path: path.resolve(__dirname, "build"), 
        filename: "bundle.js"
    },
    debug: true,
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};

module.exports = config;
