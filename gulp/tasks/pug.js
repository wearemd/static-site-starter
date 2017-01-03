var gulp    = require('gulp');
var pug     = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('jade', function (done) {
  gulp.src('./templates/*.jade')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./site'))
    .on('end', done);
});