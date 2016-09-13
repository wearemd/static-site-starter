var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['sass', 'jade'], function() {
  browserSync({
    server: {
      baseDir: "./site"
    },
    open: false
  });

  gulp.watch(["templates/**/*.jade"], ['jade', browserSync.reload]);
  gulp.watch("sass/**/*.sass", ['sass', browserSync.reload]);
  gulp.watch("sass/**/*.scss", ['sass', browserSync.reload]);
});

gulp.task('default', ['browser-sync']);