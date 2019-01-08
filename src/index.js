const swc = require('swc');

function makeLoader() {
    return function (source, inputSourceMap) {
        // Make the loader async
        const callback = this.async();

        callback(null, transform(source).code);
    };
}

module.exports = makeLoader();
module.exports.custom = makeLoader;