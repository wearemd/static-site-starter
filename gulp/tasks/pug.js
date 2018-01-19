var gulp        = require('gulp');
var pug         = require('gulp-pug');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var cache       = require('gulp-cached');
var progeny     = require('gulp-progeny');
var filter      = require('gulp-filter');

// See https://pugjs.org/api/reference.html for Pug configuration
gulp.task('pug', function (done) {
  gulp.src('./templates/**/*.pug')
    .pipe(plumber())
    .pipe(cache('pug'))
    .pipe(progeny())
    .pipe(filter(['templates/*.pug']))
    .pipe(pug())
    .pipe(gulp.dest('./site'))
    .on('end', done)
});

gulp.task('pug-reload', ['pug'], function(done){
  browserSync.reload()

  done()
})