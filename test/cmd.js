/**
 * Module dependencies.
 */

var expect = require('chai').expect;
var ext = require('../lib/extract');
var extract = ext.extract;
var fs = require('fs-extra');
var isURL = ext.isURL;
var isSSH = ext.isSSH;
var path = require('path');

describe('extract(1)', function() {

  var cwd;

  before(function(done) {
    cwd = process.cwd();
    extract('creaturephil/alpha', cwd, 'server.js', function() {
      done();
    });
  });

  it('should have a file', function(done) {
    fs.exists(path.join(cwd, 'server.js'), function(exists) {
      expect(exists).to.be.equal(true);
      fs.remove(cwd + '/server.js', function() {
        done();
      });
    });
  });

});

describe('isUrl', function() {

  it('should satisfy function', function() {
    expect('https://github.com/CreaturePhil/git-extract.git').to.satisfy(isURL);
    expect('http://github.com/CreaturePhil/git-extract.git').to.satisfy(isURL);
  });

  it('should not satisfy function', function() {
    expect('').to.not.satisfy(isURL);
    expect('creaturephil/git-extract').to.not.satisfy(isURL);
    expect('git@github.com:creaturephil/git-extract.git').to.not.satisfy(isURL);
  });

});

describe('isSSH', function() {

  it('should satisfy function', function() {
    expect('git@github.com:creaturephil/git-extract.git').to.satisfy(isSSH);
  });

  it('should not satisfy function', function() {
    expect('').to.not.satisfy(isSSH);
    expect('creaturephil/git-extract').to.not.satisfy(isSSH);
    expect('https://github.com/CreaturePhil/git-extract.git').to.not.satisfy(isSSH);
    expect('http://github.com/CreaturePhil/git-extract.git').to.not.satisfy(isSSH);
  });

});
