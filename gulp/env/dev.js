var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./site"
    },
    open: false
  });
});

gulp.task('watch', function() {
  gulp.watch(["templates/**/*.pug"], ['pug-reload']);
  gulp.watch(["sass/**/*.sass", "sass/**/*.scss"], ['sass-reload']);

  // If changes happen in site then reload the browser.
  gulp.watch(["site/fonts/**/*", "site/images/**/*"], browserSync.reload)

  // JS are compiled using webpack-stream with option watch set to true for performances reason.
  // So the script task never ends and we need to watch manually for changes on generated JS.
  gulp.watch(["site/js/app.js"], browserSync.reload)
})

gulp.task('default', ['browser-sync', 'watch', 'sass', 'pug', 'script']);