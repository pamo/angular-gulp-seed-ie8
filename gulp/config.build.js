var modRewrite = require('connect-modrewrite');
var dest = "./build";
var src = './src';
var vendor = "./bower_components";
var npms = "./node_modules";

module.exports = {
  expect:{
    paths:[
      {
        location:npms,
        message:"You must download npm dependencies using:",
        fix:"npm install"
      },
      {
        location:vendor,
        message:"You must download bower dependencies using:",
        fix:"bower install"
      }
    ]
  },
  browsersync: {
    server: {
      baseDir: [dest, src],
      middleware: [
        modRewrite([
          '!\.html|\.js|\.css|\.jpg|\.jpeg|\.gif|\.png|\.eot|\.svg|\.ttf|\.woff|\.htc$ /index.html [L]'
        ])
      ]
    },
    files: [
      dest + "/**",
      "!" + dest + "/**.map"
    ]
  },
  headjs:{
    src: dest + "/index.html",
    dest: dest,
    sources:[
      dest+'/js/legacy/head.js',
      dest+'/js/legacy/bootstrap.js'
    ],
    options:{
      ignorePath:['/build'],
      addRootSlash:false
    },    
  },
  index: {  
    src: dest + "/index.html",
    dest: dest,
    sources:{
      legacy:[
        dest+'/css/*.css',
        dest+'/js/legacy/jquery.js',
        dest+'/js/legacy/PIE_IE678.js',
        dest+'/js/legacy/respond.js',
        dest+'/js/legacy/angular.js',
        dest+'/js/legacy/angular-ui-router.js',
        dest+'/js/legacy/!(app.js|bootstrap.js)*.js',
        dest+'/js/legacy/app.js',      
      ],
      modern:[
        dest+'/css/*.css',
        dest+'/js/modern/jquery.js',
        dest+'/js/modern/angular.js',
        dest+'/js/modern/angular-ui-router.js',
        dest+'/js/modern/!(app.js|bootstrap.js)*.js',
        dest+'/js/modern/app.js',      
      ]
    }
  },
  copyjs: {
    legacy:{
      src: src + "/**/*.js",
      dest: dest + "/js/legacy"
    },
    modern:{
      src: src + "/**/*.js",
      dest: dest + "/js/modern"
    }
  },
  copyvendorjs: {
    legacy:{
      src: [
        vendor+"/pie/PIE_IE678.js",
        vendor+"/respond/src/respond.js",
        vendor+"/es5-shim/es5-shim.js",
        vendor+"/headjs/dist/1.0.0/head.js",
        vendor+"/jquery-legacy/dist/jquery.js",
        vendor+"/angular-legacy/angular.js",
        vendor+"/angular-bootstrap/ui-bootstrap-tpls.js",
        vendor+"/angular-ui-router/release/angular-ui-router.js",
      ],
      dest: dest + "/js/legacy"
    },
    modern:{
      src: [
        vendor+"/headjs/dist/1.0.0/head.js",
        vendor+"/jquery-modern/dist/jquery.js",
        vendor+"/angular-modern/angular.js",
        vendor+"/angular-bootstrap/ui-bootstrap-tpls.js",
        vendor+"/angular-ui-router/release/angular-ui-router.js",
      ],
      dest: dest + "/js/modern"
    }
  },
  copyfonts: {
    src: src + "/app/fonts/*.*",
    dest: dest + "/fonts"
  },
  copydata: {
    src: src + "/data/*.*",
    dest: dest + "/data"
  },
  copyvendorfonts: {
    src: [
      vendor+"/bootstrap-sass-official/assets/fonts/bootstrap/*.*",
      vendor+"/pie/PIE.htc",
      vendor+"/pie/PIE_IE678.js"
    ],
    dest: dest + "/fonts"
  },
  copyimages: {
    src: src + "/app/img/*.{jpg,jpeg,gif,png,svg}",
    dest: dest + "/img"
  },
  sass: {
    src: src + "/app/scss/app.scss",
    dest: dest + "/css"
  },
  cleanindex:{
    src: dest + '/index.html'
  },
  copyindex: {
    src: src + "/index.html",
    dest: dest
  },
  watch: {
    index:src + "/index.html",
    data:src + "/data/*.json",
    templates:src + "/**/*.tpl.html",
    javascript:src + "/**/*.js",
    sass:src + "/**/*.scss",
    fonts:src + "/**/*.{eot,svg,ttf,woff}",
    images:src + "/**/*.{jpg,jpeg,gif,png,svg}"
  },
  templates:{
    legacy:{
      src: src + "/**/*.tpl.html",
      dest: dest + "/js/legacy",
      filename: 'app.templates.js',
      options:{
        root:'',
        module:'app.templates',
        base:'',
        standalone:true
      }
    },
    modern:{
      src: src + "/**/*.tpl.html",
      dest: dest + "/js/modern",
      filename: 'app.templates.js',
      options:{
        root:'',
        module:'app.templates',
        base:'',
        standalone:true
      }    
    }
  }
};
