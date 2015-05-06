var gulp = require('gulp');
var templates = require('gulp-angular-templatecache');
var config = require('../config.build').templates.legacy;

gulp.task('build.templates.legacy', function () {
  gulp.src(config.src)
    .pipe(templates(config.filename, config.options))
    .pipe(gulp.dest(config.dest));
});