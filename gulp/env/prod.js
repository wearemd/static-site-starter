var gulp = require('gulp');

gulp.task('default', gulp.parallel(['pug', 'sass', 'script']));