angular.module('app.config', [])

.config(function($locationProvider, $urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
  console.log('Setting state');
  $stateProvider
    .state('app', {
      url: '/home',
      templateUrl: 'app/views/app.tpl.html',
      controller: 'app.controller'
    });

});
