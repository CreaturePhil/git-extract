/**
 * Module dependencies.
 */

var fs = require('fs-extra');
var path = require('path');

/**
 * Expose `move`.
 */

exports = module.exports = move;

/**
 * Move a file or folder to current working directory.
 *
 * @param {String} src
 * @param {String} dest
 * @param {String} repository
 */

function move(src, dest, repository) {
  fs.move(src, dest, function(err) {
    if (err) return console.error(err);
    fs.remove(repository, function(err) {
      if (err) return console.error(err);
      console.log('Extraction complete!');
    });
  });
};
