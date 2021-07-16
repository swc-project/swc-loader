# swc-loader

This package allows transpiling JavaScript files using swc and webpack.

## Installation

```sh
npm i --save-dev @swc/core swc-loader webpack
```

## Usage

```js
module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                // Use `.swcrc` to configure swc
                loader: "swc-loader"
            }
        }
    ];
}
```

You can pass options to the loader by using the option property.

```js
module: {
    rules: [
        {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "swc-loader",
                options: {
                    jsc: {
                        parser: {
                            syntax: "typescript"
                        }
                    }
                }
            }
        }
    ];
}
```

If you get an error while using `swc-loader`, you can pass `sync: true` to get correct error message.

```js
module: {
    rules: [
        {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "swc-loader",
                options: {
                    // This makes swc-loader invoke swc synchronously.
                    sync: true,
                    jsc: {
                        parser: {
                            syntax: "typescript"
                        }
                    }
                }
            }
        }
    ];
}
```

## Configuration Reference
Refer https://swc.rs/docs/configuring-swc
