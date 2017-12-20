var gulp    = require('gulp');
var webpack = require('webpack-stream');

gulp.task('script', function() {
  return gulp.src('./js/app.js')
    .pipe(webpack({
      watch: process.env.NODE_ENV != 'production',
      config: require('../../webpack.config.js')
    }))
    .pipe(gulp.dest('./site/js/'));
});