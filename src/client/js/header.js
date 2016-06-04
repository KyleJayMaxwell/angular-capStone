(function(){
  'use strict';

  angular
  .module('currentAmerica')
  // declaring new directive called footer
  .directive('header', header);

  function header() {
    return {
      // element = E
      restrict: 'E',
      // where it's looking when returning footer
      templateUrl: 'client/partials/header.html'  
    };
  }
})();