var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config.build').cleanindex;

gulp.task('build.cleanindex', function () {
  return gulp.src(config.src)
    .pipe(clean());
});
