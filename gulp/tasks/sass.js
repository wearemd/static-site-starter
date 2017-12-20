var gulp        = require('gulp');
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');

// See https://github.com/sass/node-sass for sass configuration
var sassConfig = {
  outputStyle: 'compressed',
  sourceMapEmbed: process.env.NODE_ENV != 'production',
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

gulp.task('sass-reload', ['sass'], function(done){
  browserSync.reload()

  done()
})
