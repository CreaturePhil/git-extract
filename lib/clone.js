var child_process = require('child_process');

var exec = child_process.exec;

module.exports = function(repository, callback) {
  exec(repository, function(err, stdout, stderr) {
    if (err) console.log(err);
    if (stderr) console.log(stderr);
    callback();
  });
};
