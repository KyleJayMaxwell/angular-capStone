(function () {

  'use strict';

  angular.module('currentAmerica')
    .config(config)
    .run(routeChange);

  config.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window'];


  function config($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing></landing>',

    })
    .when('/home', {
      template: '<members-all></members-all>',
      controller: 'allYearsCtr'
      
    })
  }