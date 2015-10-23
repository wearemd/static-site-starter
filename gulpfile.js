var gulp        = require('gulp');
var browserSync = require('browser-sync');
var jade        = require('gulp-jade');
var sass        = require('gulp-ruby-sass');
var plumber     = require('gulp-plumber');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./site"
    },
    open: false
  });
});

gulp.task('sass', function (done) {
  sass('./sass/style.sass', {style: 'compressed'})
    .pipe(plumber())
    .pipe(gulp.dest('./site/css'))
    .on('end', done);
});

gulp.task('jade', function (done) {
  gulp.src('./templates/*.jade')
    .pipe(plumber())
    .pipe(jade({}))
    .pipe(gulp.dest('./site'))
    .on('end', done);
});

gulp.task('default', ['browser-sync', 'sass', 'jade'], function () {
  gulp.watch(["templates/**/*.jade"], ['jade', browserSync.reload]);
  gulp.watch("sass/**/*.sass", ['sass', browserSync.reload]);
  gulp.watch("sass/**/*.scss", ['sass', browserSync.reload]);
  gulp.watch("site/js/*.js", browserSync.reload);
});
