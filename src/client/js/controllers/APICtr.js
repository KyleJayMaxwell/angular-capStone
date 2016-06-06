angular
    .module('currentAmerica').controller('MyCtrl', ['$scope', 'energyDataService',
 function($scope, energyDataService) {
    $scope.hideFilters = true;
    $scope.toggleFilters = function() {
        $scope.hideFilters = !$scope.hideFilters;
    }
    $scope.compareYears = false;
    $scope.compareStates = false;
    $scope.toggleStates = function() {
        $scope.compareStates = !$scope.compareStates;
    }
    $scope.toggleYears = function() {
        $scope.compareYears = !$scope.compareYears;
    }
        
    $scope.getAllYears = function(){

        energyDataService.getAllYears()
        .then(function(years) {
            $scope.allYearsData = years.data;
            // console.log($scope.allYearsData);
            parseYear(years.data)
        })
    };

     parseYear = function (data) {
         for (var i =0; i<data.length; i++) {
             if (data[i]["yearNum"] === "2000") {
                oneYearData = data[i];
                 console.log(oneYearData);
                 for (var j=0; j<oneYearData.state.length; j++) {
                     console.log('59 checks')
                    if (oneYearData.state[j].name === "Alaska") {
                   oneStateOneYearData = oneYearData.state[j].producer[0]['Total Electric Power Industry']
                    console.log(oneStateOneYearData)
                    }
                }
             }
         }
     }


     parseYear2 = function (data, yearID, stateID) {
         data[yearID].state[stateID].producer[0]['Total Electric Power Industry']
     }
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
