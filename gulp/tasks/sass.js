var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
// var sassVariables = require("gulp-sass-variables");
var browserSync = require("browser-sync");
var { assetVersion } = require("../helpers/url");
var sassVariables = require("../helpers/sass-variables");

// See https://github.com/sass/node-sass for sass configuration
var sassConfig = {
  outputStyle: "compressed",
  sourceMapEmbed: process.env.NODE_ENV != "production",
  includePaths: ["node_modules"]
};

// gulp-sass doesn't work well with gulp-plumber, see: https://github.com/floatdrop/gulp-plumber/issues/32
// Simple fix by adding .on callback to sass().
function styles() {
  return gulp
    .src("./sass/style.sass")
    .pipe(
      sassVariables({
        $assetVersion: assetVersion
      })
    )
    .pipe(sass(sassConfig).on("error", sass.logError))
    .pipe(gulp.dest("./site/css"));
}

gulp.task("sass", styles);

gulp.task("sass-stream", function() {
  return styles().pipe(browserSync.stream());
});
