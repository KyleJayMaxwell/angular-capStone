(function () {

  'use strict';

  angular
      .module('currentAmerica')
      .config(config);

  config.$inject = ['$routeProvider', '$httpProvider'];

  function config($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing></landing>'
    })
    .when('/home', {
      template: '<home></home>'   
    })
  }




})();
