angular
    .module('currentAmerica').controller('MyCtrl', ['$scope', 'energyDataService',
 function($scope, energyDataService) {
    $scope.hideFilters = false;
    $scope.toggleFilters = function() {
        $scope.hideFilters = !$scope.hideFilters;
    }
        
    $scope.getAllYears = function(){

        energyDataService.getAllYears()
        .then(function(years) {
            $scope.allYearsData = years.data;
            console.log($scope.allYearsData);
            return $scope.allYearsData;
        })
    };

 // $scope.loading = true;

 // $scope.getProfile = function(id){
 //   console.log(id);
 //   memberDataService.getProfile(id)
 //     .then(function(member){
 //       $scope.member = member.data.data;
 //       console.log($scope.member);
 //       $scope.profile = true;

 //     })
 // };

 // $scope.sortType = '-date';

}]);
