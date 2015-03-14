var fs = require('fs-extra');
var path = require('path');

module.exports = function(src, dest, repo) {
  fs.move(src, dest, function(err) {
    if (err) return console.error(err);
    fs.remove(repo, function(err) {
      if (err) return console.error(err)
      console.log('Extraction complete!');
    });
  });
};
