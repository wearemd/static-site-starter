var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['sass', 'pug'], function() {
  // Script is an async task in dev mode so it must be called that way.
  // Otherwise the current function will never be called.
  gulp.start('script')

  browserSync({
    server: {
      baseDir: "./site"
    },
    open: false
  });

  gulp.watch(["templates/**/*.pug"], ['pug', browserSync.reload]);
  gulp.watch(["sass/**/*.sass", "sass/**/*.scss"], ['sass', browserSync.reload]);
  gulp.watch(["site/js/*.js"], browserSync.reload)
});

gulp.task('default', ['browser-sync']);