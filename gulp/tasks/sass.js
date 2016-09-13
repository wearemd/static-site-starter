var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function (done) {
  gulp.src('./sass/style.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(plumber())
    .pipe(gulp.dest('./site/css'))
    .on('end', done);
});
