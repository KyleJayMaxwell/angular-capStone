(function(){
  'use strict';

  angular
  .module('currentAmerica')
  // declaring new directive called footer
  .directive('footer', footer);

  function footer() {
    return {
      // element = E
      restrict: 'E',
      // where it's looking when returning footer
      templateUrl: 'partials/footer.html'  
    };
  }
})();