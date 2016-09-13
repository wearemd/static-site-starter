var gulp    = require('gulp');
var jade    = require('gulp-jade');
var plumber = require('gulp-plumber');

gulp.task('jade', function (done) {
  gulp.src('./templates/*.jade')
    .pipe(plumber())
    .pipe(jade({}))
    .pipe(gulp.dest('./site'))
    .on('end', done);
});