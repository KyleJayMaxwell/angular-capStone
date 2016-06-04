(function(){
  'use strict';

  angular
  .module('currentAmerica')
  // declaring new directive called footer
  .directive('home', home);

  function home() {
    return {
      // element = E
      restrict: 'E',
      // where it's looking when returning footer
      templateUrl: 'client/partials/index.html'  
    };
  }
})();