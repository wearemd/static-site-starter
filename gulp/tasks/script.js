var gulp = require("gulp");
var webpack = require("webpack-stream");

var isDev = process.env.NODE_ENV != "production";

gulp.task("script", function() {
  return gulp
    .src("./js/scripts.js")
    .pipe(
      webpack({
        watch: isDev,
        config: isDev
          ? require("../webpack/dev.js")
          : require("../webpack/prod.js")
      })
    )
    .pipe(gulp.dest("./site/js/"));
});
