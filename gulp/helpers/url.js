var path = require("path");
var packageJson = require(path.resolve(__dirname, "../../package.json"));

exports.assetVersion = `?v=${packageJson.version}`;
