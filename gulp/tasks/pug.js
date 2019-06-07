var gulp = require("gulp");
var pug = require("gulp-pug");
var browserSync = require("browser-sync");
var cache = require("gulp-cached");
var progeny = require("gulp-progeny");
var filter = require("gulp-filter");
var { assetVersion } = require("../helpers/url");

// See https://pugjs.org/api/reference.html for Pug configuration
gulp.task("pug", function() {
  return gulp
    .src("./templates/**/*.pug")
    .pipe(cache("pug"))
    .pipe(progeny())
    .pipe(filter(["templates/*.pug"]))
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
