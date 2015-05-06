var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copyjs.legacy;

gulp.task('build.copyjs.legacy', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
