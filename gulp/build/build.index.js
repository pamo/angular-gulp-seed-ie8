var gulp = require('gulp');
var injectAssets = require("gulp-inject");
var injectString = require('gulp-inject-string');
var es = require('event-stream');
var path = require('path');

var headjs = require('../config.build').headjs;
var config = require('../config.build').index;

gulp.task('build.index', ['build.copyindex', 'build.templates', 'build.copyjs', 'build.copyvendorjs', 'build.sass'], function () {
  
  var target = gulp.src(config.src);
  var jsassets = gulp.src(headjs.sources, {read: false});
  
  var sourcesModern = gulp.src(config.sources.modern, {read: false});
  var sourcesLegacy = gulp.src(config.sources.legacy, {read: false});
  
  
  var collectedLegacy = collectFilesToInject(sourcesLegacy, {});

  return collectedLegacy(function(collectionLegacy){

    var collectionLegacyCss = findCss(collectionLegacy, "css/");
    var collectionLegacyJs = findJs(collectionLegacy, "js/legacy/");
    
    var collectedModern = collectFilesToInject(sourcesModern, {});
    
    collectedModern(function(collectionModern){

      var collectionModernCss = findCss(collectionModern, "css/");
      var collectionModernJs = findJs(collectionModern, "js/modern/");
      
      return target
        .pipe(injectAssets(jsassets, headjs.options))
        
        .pipe(injectString.before('<!-- inject:js -->', '<script>\r\n'))
        .pipe(injectString.before('<!-- inject:js -->', 'var LEGACY_CSS = ' + JSON.stringify(collectionLegacyCss) + ';\r\n'))
        .pipe(injectString.before('<!-- inject:js -->', 'var LEGACY_JS = ' + JSON.stringify(collectionLegacyJs) + ';\r\n'))
        .pipe(injectString.before('<!-- inject:js -->', '</script>\r\n'))
        
        .pipe(injectString.before('<!-- inject:js -->', '<script>\r\n'))
        .pipe(injectString.before('<!-- inject:js -->', 'var MODERN_CSS = ' + JSON.stringify(collectionModernCss) + ';\r\n'))
        .pipe(injectString.before('<!-- inject:js -->', 'var MODERN_JS = ' + JSON.stringify(collectionModernJs) + ';\r\n'))
        .pipe(injectString.before('<!-- inject:js -->', '</script>\r\n'))

        .pipe(gulp.dest(config.dest));
    });    
  });
});


function collector (collection, opt) {
  return function (file) {
    if (!file.path) {
      return;
    }
    collection.push(path.basename(file.path));
  };
}

function collectFilesToInject (sources, opt) {
  var collection = [], done = false, queue = [];
  sources.pipe(es.through(collector(collection, opt), function () {
    done = true;
    while (queue.length) {
      resolve(queue.shift());
    }
    }));
    function resolve (cb) {
      process.nextTick(function () {
      cb(collection);
    });
  }
  return function (cb) {
    if (done) {
      resolve(cb);
    } else {
      queue.push(cb);
    }
  };
}

function findCss(collection, prefix){
  var css = [];
  collection.forEach(function(collected){
    if(collected.indexOf("css") !== -1){
      css.push(prefix+collected);
    }
  });
  return css;
}

function findJs(collection, prefix){
  var js = [];
  collection.forEach(function(collected){
    if(collected.indexOf("js") !== -1){
      js.push(prefix+collected);
    }
  });
  return js;
}