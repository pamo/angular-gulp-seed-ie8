var gulp  = require('gulp');
var config = require('../config.build').watch;

gulp.task('build.watch', ['build.browsersync'], function() {
  gulp.watch(config.data, ['build.copydata']);
  gulp.watch(config.sass, ['build.sass']);
  gulp.watch(config.index, ['build.index']);
  gulp.watch(config.templates, ['build.templates']);
  gulp.watch(config.javascript, ['build.copyjs']);
  gulp.watch(config.fonts, ['build.copyfonts']);
  gulp.watch(config.images, ['build.copyimages']);
});