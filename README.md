# swc-loader

This package allows transpiling JavaScript files using swc and webpack.

## Installation
```sh
npm install -D swc-loader webpack
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
        loader: 'swc-loader',
      }
    }
  ]


```