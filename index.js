'use strict';

var bemjsonToDecl = require('bemjson-to-decl');
var loaderUtils = require('loader-utils');

/**
 * Converts bemjson file to bemdecl
 *
 * **query**
 *
 * * @param {boolean} stringify
 *
 * @param  {string} source
 * @return {string}
 */
module.exports = function (source) {
  this.cacheable && this.cacheable();

  var bemjson = this.exec(source, this.resourcePath);
  var query = loaderUtils.parseQuery(this.query);
  var shouldStringify = typeof query.stringify === 'boolean'
    ? query.stringify
    : true;

  if (shouldStringify) {
    return 'module.exports = ' + bemjsonToDecl.stringify(bemjson);
  }

  return bemjsonToDecl.convert(bemjson);
};
