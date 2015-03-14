# [git-extract](https://www.npmjs.com/package/git-extract)
[![NPM Version](https://img.shields.io/npm/v/git-extract.svg)](https://www.npmjs.org/package/git-extract)
[![Build Status](https://travis-ci.org/CreaturePhil/git-extract.svg)](https://travis-ci.org/CreaturePhil/git-extract)
[![Dependency Status](https://david-dm.org/CreaturePhil/git-extract.svg)](https://david-dm.org/CreaturePhil/git-extract) 
[![devDependency Status](https://david-dm.org/CreaturePhil/git-extract/dev-status.svg)](https://david-dm.org/CreaturePhil/git-extract#info=devDependencies)

Extract files or folders from a Git repository.

## Installation

```bash
$ npm install -g git-extract
```

## Usage

```bash
$ extract
  Usage: extract [file|folder] [repositories]


  Commands:

    *   extract file or folder from a repository

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

Example:

```bash
$ extract server.js creaturephil/alpha
```

## License

[MIT](LICENSE)

