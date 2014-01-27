#global module:false
module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    connect:
      server:
        options:
          port: 5000
          base: "dist/"

    watch:

      stylesheets:
        files: "scss/**/*"
        tasks: "compass:dev"

      livereload:
        files: "dist/css/*"
        options:
          livereload: true

      partials:
        files: ["partials/*", "layouts/*", "data/*"]
        tasks: ["assemble"]
        options:
          livereload: true

      javascript:
        files: ["coffee/*", "js/*.js"]
        tasks: "javascript:dev"

      cukes:
        files: ["features/*.feature", "features/step_definitions/*.coffee"]
        tasks: "cucumberjs"

      publicDirectory:
        files: [ "public/**/*" ]
        tasks: "default"

    compass:
        dev:
          options:
            environment: 'dev'
            require: 'sass-globbing'
        dist:
          options:
            environment: 'production'

    coffee:
      compile:
        files:
          "js/app.js": "coffee/app.coffee"

    assemble:
      options:
        partials: "partials/*"
        data: "data/*.yml"
        layout: "layouts/default.hbs"
      index:
        src: "partials/index.hbs"
        dest: "dist/index.html"

    concat:
      js:
        src: ["js/libs/*", "js/app.js"]
        #put it in dist/
        dest: "dist/js/ethanmullercom.js"

    modernizr:
      devFile: "public/js/libs/modernizr.js"
      outputFile: "dist/js/modernizr.js"
      extra:
        shiv: true
        printshiv: true
        load: true
        mq: false
        cssclasses: true

      extensibility:
        addtest: false
        prefixed: false
        teststyles: false
        testprops: false
        testallprops: false
        hasevents: false
        prefixes: false
        domprefixes: false

      uglify: true
      parseFiles: true
      matchCommunityTests: false

    clean:
      all:
        src: "dist/*"
        dot: true # clean hidden files as well

    copy:
      bower_jquery:
        files: [
          expand: true
          cwd: 'js/jquery/'
          src: 'jquery.min.js'
          dest: 'public/js/libs/'
        ]
      bower_modernizr: 
        files: [
          expand: true
          cwd: 'js/modernizr/'
          src: ['modernizr.js']
          dest: 'public/js/libs/'
        ]
      main:
        files: [
          expand: true
          dot: true
          cwd:'public/'
          src: ["**"]
          dest: "dist/"
        ]

    cucumberjs: {
      files: 'features',
      options: {
        steps: "features/step_definitions"
      }
    }

    plato:
      complexity:
        files:
          'reports/js-complexity': ['dist/**/*.js']

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-compass"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-cucumber"
  grunt.loadNpmTasks "grunt-modernizr"
  grunt.loadNpmTasks "grunt-notify"
  grunt.loadNpmTasks "grunt-exec"
  grunt.loadNpmTasks "grunt-plato"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "assemble"

  grunt.registerTask "bower", [ "copy:bower_jquery", "copy:bower_modernizr" ]
  
  # NOTE: this has to wipe out everything
  grunt.registerTask "root-canal", [ "clean:all", "bower", "copy:main"]

  # Clean, compile and concatenate JS
  grunt.registerTask "javascript:dev", [ "coffee", "concat:js", "cucumberjs", "plato" ]

  grunt.registerTask "javascript:dist", [ "coffee", "concat:js", "modernizr", "cucumberjs" ]

  # Production task
  grunt.registerTask "dev", [ "root-canal", "javascript:dev", "compass:dev", "assemble", "connect", "watch"]

  grunt.registerTask "dist", [ "root-canal", "javascript:dist", "compass:dist", "assemble" ]

  # Default task
  grunt.registerTask "default", "dev"
