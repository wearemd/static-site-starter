var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');

// See https://github.com/sass/node-sass for sass configuration
var sassConfig = {
  outputStyle: 'compressed',
  includePaths: [
    'node_modules'
  ]
}

gulp.task('sass', function (done) {
  gulp.src('./sass/style.sass')
    .pipe(sass(sassConfig))
    .pipe(plumber())
    .pipe(gulp.dest('./site/css'))
    .on('end', done);
});
