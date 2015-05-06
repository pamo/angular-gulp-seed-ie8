var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copyvendorjs.modern;

gulp.task('build.copyvendorjs.modern', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
