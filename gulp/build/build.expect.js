var gulp = require('gulp');
var config = require('../config.build').expect;
var fs = require('fs');
var colors = require('colors');


gulp.task('build.expect', function(){
  config.paths.forEach(function(path){
    if (fs.existsSync(path.location)) {
      console.log(colors.green('SUCCESS\t') + colors.grey(path.location + ' exists!'));
    }
    else{
      console.log(colors.red('\nERROR\t') + colors.grey(path.message));
      console.log(colors.cyan('\t'+path.fix+'\n'));
      
      throw new Error("Missing dependencies. Halting Build.");
    }
  });
});