var gulp = require('gulp');
var config = require('../config.build').copyindex;

gulp.task('build.copyindex', ['build.cleanindex'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
