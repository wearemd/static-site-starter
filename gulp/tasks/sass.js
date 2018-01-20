var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');

// See https://github.com/sass/node-sass for sass configuration
var sassConfig = {
  outputStyle: 'compressed',
  sourceMapEmbed: process.env.NODE_ENV != 'production',
  includePaths: [
    'node_modules'
  ]
}

// gulp-sass doesn't work well with gulp-plumber, see: https://github.com/floatdrop/gulp-plumber/issues/32
// Simple fix by adding .on callback to sass().
gulp.task('sass', function (done) {
  gulp.src('./sass/style.sass')
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(gulp.dest('./site/css'))
    .on('end', done);
});

gulp.task('sass-reload', gulp.series(['sass'], function(done){
  browserSync.reload()

  done()
}))
