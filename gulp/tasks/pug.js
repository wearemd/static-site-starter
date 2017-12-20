var gulp    = require('gulp');
var pug     = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('pug', function (done) {
  gulp.src('./templates/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./site'))
    .on('end', done);
});