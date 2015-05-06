var gulp = require('gulp');

gulp.task('build.copyvendorjs', [
  'build.copyvendorjs.legacy',
  'build.copyvendorjs.modern'
]);