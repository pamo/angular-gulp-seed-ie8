var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copyjs.modern;

gulp.task('build.copyjs.modern', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
