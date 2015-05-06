var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copyvendorfonts;

gulp.task('build.copyvendorfonts', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
