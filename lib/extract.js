/**
 * Module dependencies.
 */

var clone = require('./clone');
var move = require('./move');
var path = require('path');

/**
 * Expose `extract`.
 */

exports = module.exports = extract;


/**
 * Clone a Git repository and move the file to current 
 * working directory.
 *
 * @param {String} repository
 * @param {String} cwd (current working directory)
 * @param {String} f (file or folder)
 */

function extract(repository, cwd, f) {
  if (!repository || repository.indexOf('/') < 0 && repository.indexOf('@') < 0) {
    return console.log('Incorrect repository URL or SSH.');
  }

  if (!isURL(repository) || !isSSH(repository)) {
    repository = 'https://github.com/' + repository + '.git';
  }

  clone('git clone ' + repository, function() {
    var repo = repository.slice(-9).slice(0, 5);
    move(path.join(cwd, repo, f), path.join(cwd, f), path.join(cwd, repo));
  }); 
}

/**
 * Check if given `str` is a URL (Uniform Resource Locator).
 *
 * @param {String} str
 * @return {Boolean}
 */

function isURL(str) {
  if (str.substring(0, 7) === 'http://' || str.substring(0, 8) === 'https://') {
    return true;
  }
  return false;
}

/**
 * Check if given `str` is a SSH (Secure Socket Shell).
 *
 * @param {String} str
 * @return {Boolean}
 */

function isSSH(str) {
  return str.indexOf('@') > -1 && str.indexOf(':') > -1 ? true : false;
}
