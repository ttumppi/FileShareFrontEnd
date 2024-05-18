const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {


    plugins: [
        new NodePolyfillPlugin()
    ]
};

