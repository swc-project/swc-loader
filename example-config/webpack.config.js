"use strict";

const path = require("path");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: require.resolve(".."), // you would put swc-loader
                    options: {
                        jsc: {
                            target: "es2015",
                            parser: {
                                syntax: "ecmascript",
                                jsx: true,
                                dynamicImport: true,
                                classProperty: true,
                                exportNamespaceFrom: true,
                                exportDefaultFrom: true
                            }
                        }
                    }
                }
            }
        ]
    }
};
