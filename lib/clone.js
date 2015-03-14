/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

/**
 * Expose `clone`.
 */

exports = module.exports = clone;

/**
 * Clone a Git repository.
 *
 * @param {String} repository
 * @param {Function} callback
 */

function clone(repository, callback) {
  exec(repository, function(err, stdout, stderr) {
    if (err) console.log(err);
    if (stderr) console.log(stderr);
    callback();
  });
};
