'use strict';

const bemjsonToDecl = require('bemjson-to-decl');
const nEval = require('node-eval');

/**
 * Extract bemdecl from bemjson
 *
 * @param  {string} source
 */
module.exports = function (source) {
  this.cacheable && this.cacheable();
  const callback = this.async();

  new Promise(resolve => {
    const bemjson = nEval(source);
    const decls = bemjsonToDecl.convert(bemjson);
    resolve(decls);
  })
    .then(res => callback(null, res))
    .catch(callback);
};
