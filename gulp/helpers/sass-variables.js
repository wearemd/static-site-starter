// We have a problem with the gulp-sass-variables so here is a patched version
// while waiting for https://github.com/osaton/gulp-sass-variables/pull/5

'use strict';

const PLUGIN_NAME = 'gulp-sass-variables';

const PluginError = require('plugin-error');
const through = require('through2');

const getVariablesBuffer = function(sassVariables, file) {
  let str = '';
  let strEndLine = file.extname === '.sass' ? '\n' : ';\n';

  for(let variable in sassVariables) {
    str += variable + ': ' + JSON.stringify(sassVariables[variable]) + strEndLine;
  }

  return new Buffer.from(str, file);
}

module.exports = function(sassVariables) {

  return through.obj(function (file, encoding, cb) {

    if(file.isNull()) {
      return cb(null, file);
    }

    if(file.isStream()) {
      return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    if(sassVariables && typeof sassVariables === 'object') {
      let variablesBuffer = getVariablesBuffer(sassVariables, file);
      file.contents = Buffer.concat([variablesBuffer, file.contents], variablesBuffer.length + file.contents.length);
    } else {
      return cb(new PluginError(PLUGIN_NAME, 'Variables object expected'));
    }

    return cb(null, file);

  });
};
