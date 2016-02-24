/*global module:false*/
'use strict';
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint']
      },
      js: {
        files: ['*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      livereload: {
        files: [
          'index.html'
        ],
        tasks: ['includes'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components'))
            ];
          }
        }
      },
    },

    // Empties folders to start fresh
    clean: {
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '*.js'
      ]
    },

    includes: {
      files: {
        src: ['index.html'], // Source files
        dest: '.tmp', // Destination directory
        flatten: true,
        cwd: '.',
        options: {
          silent: true,
        }
      }
    }
  });

  /*
   * Make sure that the bower_components dependency path exists
   * even if we have no external dependencies, otherwise
   * wiredep gets mad
   */
  grunt.registerTask('checkdeps', function() {
    var fs = require('fs');
    if (! fs.existsSync('bower_components')) {
      fs.mkdirSync('bower_components');
    }
  });

  grunt.registerTask('serve', function () {
    grunt.task.run([
      'clean:server',
      'jshint',
      'checkdeps',
      'includes',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('default', 'serve');

  grunt.registerTask('test', [
    'jshint'
  ]);
};
