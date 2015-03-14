/**
 * Module dependencies.
 */

var expect = require('chai').expect;
var isURL = require('../lib/extract').isURL;
var isSSH = require('../lib/extract').isSSH;

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
