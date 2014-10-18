module.exports = (gulp, cfg, env) ->
  plumber = require 'gulp-plumber'
  errorHandler = require '../lib/error-handler'
  sass = require 'gulp-sass'
  minifyCSS = require 'gulp-minify-css'
  sourcemaps = require 'gulp-sourcemaps'
  gulpif = require 'gulp-if'

  gulp.task "styles", ->
    stream = gulp.src(cfg.paths.stylesIn + '**/*.scss')
      .pipe plumber errorHandler: errorHandler.error
      .pipe sourcemaps.init()
      .pipe sass
        includePaths: require('node-bourbon').includePaths
      .pipe sourcemaps.write()
      .pipe gulp.dest cfg.paths.stylesOut
