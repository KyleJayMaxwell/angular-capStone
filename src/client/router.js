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
      template: '<home></home>',
      controller: $http.get('http://localhost:8888/year/state')
          .success(function (data) {
            $scope.todos = data;
            console.log(data);
          })
          .error(function (data) {
            console.log('Error: ' + data);
          })
    })
  }




})();

