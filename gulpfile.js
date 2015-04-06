var gulp        = require('gulp');
var gutil       = require('gulp-util');
var browserSync = require('browser-sync');
var jade        = require('gulp-jade');
var sass        = require('gulp-ruby-sass');
var bowerFiles  = require('main-bower-files');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./site"
    },
    open: false
  });
});

gulp.task('sass', function () {
    return sass('./sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('./site'));
});

gulp.task('jade', function() {
  return gulp.src('./templates/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./site'));
});

gulp.task('default', ['browser-sync', 'sass', 'jade'], function () {
  gulp.watch(["templates/*.jade"], ['jade', browserSync.reload]);
  gulp.watch("sass/**/*.sass", ['sass', browserSync.reload]);
});