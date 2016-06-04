// sample angular code



angular
    .module('currentAmerica')
    .controller('myController', ['$scope', function($scope) {
  $scope.company = "Current America";

  $scope.showPieGraphs = false;
  $scope.showUsMap = false;
  $scope.toggleUsMap = function(){
    $scope.showUsMap = !$scope.showUsMap;
  }
    $scope.togglePieGraphs = function(){
    $scope.showPieGraphs = !$scope.showPieGraphs;
  }
}]);



(function () {

  'use strict';

  angular
      .module('currentAmerica')
      .controller('allYearCtr', allYearsCtr);
  allYearsCtr.$inject = [ 'energyDataService'];


  function allYearsCtr (energyDataService) {
    var vm = this;
    energyDataService.getAllYears()
        .then(function(data) {
          /* jshint validthis: true */
          console.log('members', data);
          vm.allYears = data;
        });
  }

})();


//On Map appear fire Get Current Year append to Map data
//