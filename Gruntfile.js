module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['*.js', 'bin/extract', 'lib/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};
