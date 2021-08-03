module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/script.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },


    sass: {                              // Task
       dist: {                            // Target
         options: {                       // Target options
           style: 'expanded'
         },
         files: {                         // Dictionary of files
           'main.css': 'main.scss',       // 'destination': 'source'
           'widgets.css': 'widgets.scss'
         }
       }
     },

     htmllint: {
    your_target: {
      options: {
        force: false,
        plugins: ['htmllint-plugin-name'],
        /* htmllint options go here */
      },
      src: [
        'path/to/yo/html_files'
      ]
    }
  },

  csslint: {
    options: {
      csslintrc: '.csslintrc'
    },
    strict: {
      options: {
        import: 2
      },
      src: ['path/to/**/*.css']
    },
    lax: {
      options: {
        import: false
      },
      src: ['path/to/**/*.css']
    }
  },

  jsonlint: {
  sample: {
    src: [ 'some/valid.json' ],
    options: {
      formatter: 'prose'
    }
  }
},


watch: {
  scripts: {
    files: ['Gruntfile.js','js/style.scss', 'index.html', 'ccs/styles.css'],
    tasks: ['jshint', 'sass', 'uglify', 'htmllint', 'csslint'],
    options: {
      spawn: false,
    },
  },
},



  });










  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'csslint', 'sass', 'jsonlint', 'watch']);




  grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-csslint');
          grunt.loadNpmTasks('grunt-contrib-jsonlint');


  grunt.registerTask('default', ['sass']);

};
