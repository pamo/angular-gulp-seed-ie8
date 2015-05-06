var gulp = require('gulp');

gulp.task('build', [
  'build.expect',
  'build.copyimages',
  'build.copyfonts',
  'build.copydata',
  'build.copyvendorfonts',
  'build.index'
]);