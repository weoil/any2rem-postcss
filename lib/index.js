'use strict';

var postcss = require('postcss');
var Any2rem = require('./any2rem');

module.exports = postcss.plugin('postcss-any2rem', function (options) {
  return function (css, result) {
    if (options.exclude && css.source.input.file.match(options.exclude) !== null) {
      result.root = css;
      return
    }
    var oldCssText = css.toString();
    var any2remIns = new Any2rem(options);
    var newCssText = any2remIns.generateRem(oldCssText);
    result.root = postcss.parse(newCssText)
  }
});
