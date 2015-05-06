var gulp = require('gulp');

gulp.task('build.copyjs', [
  'build.copyjs.legacy',
  'build.copyjs.modern'
]);