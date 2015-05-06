var gulp = require('gulp');

gulp.task('build.templates', [
  'build.templates.legacy',
  'build.templates.modern'
]);