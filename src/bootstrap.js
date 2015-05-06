//IE8 and IE9 Quirks mode detection
if (window.attachEvent && !window.addEventListener) {
  head.load(LEGACY_CSS);
  head.load(LEGACY_JS, function() {
    angular.bootstrap(document.getElementById("app"), ["app"]);
  });      
}
else{
  head.load(MODERN_CSS);
  head.load(MODERN_JS, function() {
    angular.bootstrap(document.getElementById("app"), ["app"]);
  });   
}