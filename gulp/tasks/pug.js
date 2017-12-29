var gulp        = require('gulp');
var pug         = require('gulp-pug');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');

// See https://pugjs.org/api/reference.html for Pug configuration
gulp.task('pug', function (done) {
  gulp.src('./templates/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./site'))
    .on('end', done)
});

gulp.task('pug-reload', ['pug'], function(done){
  browserSync.reload()

  done()
})