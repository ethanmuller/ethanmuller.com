#global module:false
module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

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
            require: 'sass-globbing'

    coffee:
      compile:
        files:
          "js/_app.js": "coffee/*.coffee"

    assemble:
      options:
        partials: "partials/*"
        data: "data/*.yml"
        layout: "layouts/default.hbs"
      index:
        src: "partials/index.hbs"
        dest: "dist/index.html"

    bower_concat:
      all:
        dest: "js/_libs.js"
        exclude: "modernizr"
        bowerOptions:
          relative: false

    concat:
      js:
        src: ["js/_libs.js", "js/_app.js"]
        #put it in dist/
        dest: "dist/js/ethanmullercom.js"

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

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-compass"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-bower-concat"
  grunt.loadNpmTasks "grunt-cucumber"
  grunt.loadNpmTasks "grunt-notify"
  grunt.loadNpmTasks "grunt-exec"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "assemble"

  # NOTE: this has to wipe out everything
  grunt.registerTask "root-canal", [ "clean:all", "copy:main"]

  # Clean, compile and concatenate JS
  grunt.registerTask "javascript:dev", [ "coffee", "bower_concat", "concat:js", "cucumberjs"]

  grunt.registerTask "javascript:dist", [ "coffee", "bower_concat", "concat:js", "cucumberjs" ]

  # Production task
  grunt.registerTask "dev", [ "root-canal", "javascript:dev", "compass:dev", "assemble"]

  grunt.registerTask "dist", [ "root-canal", "javascript:dist", "compass:dist", "assemble" ]

  # Default task
  grunt.registerTask "default", "dev"
