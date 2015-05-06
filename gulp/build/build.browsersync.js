var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config.build').browsersync;

gulp.task('build.browsersync', ['build'], function() {
  browserSync(config);
});
