module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "js/require.config.js",
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'requirejs'],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        },
      },
      templates: {
        files: ['js/*.html'],
        tasks: ['requirejs'],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        },
      },
      css: {
        files: ['css/*.css'],
        tasks: [],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        },
      },
      index: {
        files: ['index.html'],
        tasks: [],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        },
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js', '!js/lib/**', '!js/build.js'],
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {

        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'requirejs']);

  grunt.registerTask('server', ['default', 'watch']);

};