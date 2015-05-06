angular.module('app.controller', [])

.controller('app.controller', function($scope) {
  console.log('App Controller');

  $scope.title = "Hello World";
  $scope.subtitle = "This app is running version 1.13.15 of AngularJS!";
  $scope.content = "And it runs in IE8!";

});