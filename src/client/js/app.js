// sample angular code

var app = angular.module('currentAmerica', []);

app.controller('myController', ['$scope', function($scope) {
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
