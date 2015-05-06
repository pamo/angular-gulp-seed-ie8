var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copyvendorjs.legacy;

gulp.task('build.copyvendorjs.legacy', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
