/**
 * Module dependencies.
 */

var chalk = require('chalk');
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
  var error;
  fs.move(src, dest, function(err) {
    if (err) {
      console.error(chalk.red(err));
      error = true;
    }
    fs.remove(repository, function(err) {
      if (err) return console.error(err);
      if (error) return;
      console.log(chalk.green('Extraction complete!'));
    });
  });
};
