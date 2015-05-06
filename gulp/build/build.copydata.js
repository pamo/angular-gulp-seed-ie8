var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copydata;

gulp.task('build.copydata', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
