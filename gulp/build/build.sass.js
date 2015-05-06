var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config.build').sass;

gulp.task('build.sass', function () {

  return gulp.src(config.src)
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
});