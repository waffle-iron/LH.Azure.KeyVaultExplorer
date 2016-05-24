var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sass = require('gulp-sass');

var paths = {
    "scripts": [ 'app/**/*.ts' ],
    "scriptsDest": "out/scripts/",
    "scriptsFileName": "super_dummy.js",
    "styles": [ "app/assets/**/*.scss" ],
    "stylesDest": "out/assets/styles/"
}

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });

gulp.task('scripts', function() {
  var tsResult = tsProject
    .src()
    .pipe(ts(tsProject));
 
  return merge([
    tsResult.dts.pipe(gulp.dest(paths.scriptsDest.concat("dts"))),
    tsResult.js.pipe(gulp.dest(paths.scriptsDest.concat("js")))
    ]);
});

gulp.task('sass', function () {
  gulp.src(paths.styles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.stylesDest));
});
 
gulp.task('watch', function () {
  gulp.watch(path.styles, ['sass']);
  gulp.watch(path.scripts, ['scripts']);
});

gulp.task('default', ['watch'], function () {});