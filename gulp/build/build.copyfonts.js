var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config.build').copyfonts;

gulp.task('build.copyfonts', function() {
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest));
});
