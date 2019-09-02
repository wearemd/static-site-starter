var gulp = require("gulp");
var pug = require("gulp-pug");
var browserSync = require("browser-sync");
var { assetVersion } = require("../helpers/url");

// See https://pugjs.org/api/reference.html for Pug configuration
gulp.task("pug", function() {
  return gulp
    .src("./templates/*.pug")
    .pipe(
      pug({
        data: {
          assetVersion: assetVersion
        }
      })
    )
    .pipe(gulp.dest("./site"));
});

gulp.task(
  "pug-reload",
  gulp.series("pug", function(done) {
    browserSync.reload();

    done();
  })
);
