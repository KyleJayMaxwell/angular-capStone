 angular
     .module('currentAmerica')
     .controller('MyCtrl', ['$scope', 'energyDataService',
 function($scope, ngAnimate, energyDataService) {
    $scope.spanState = "Colorado";

     $scope.showFilters = false;

    $scope.compareYears = false;
    $scope.compareStates = false;
    $scope.toggleStates = function() {
        if($scope.compareYears = true){
            $scope.compareYears = false;
        }
        $scope.compareStates = !$scope.compareStates;
    }
    $scope.toggleYears = function() {
        if($scope.compareStates = true){
            $scope.compareStates = false;
        }
        $scope.compareYears = !$scope.compareYears;
    }

     $scope.years = [
         {'value': 0, 'year': 1990},
         {'value': 1, 'year': 1991},
         {'value': 2, 'year': 1992},
         {'value': 3, 'year': 1993},
         {'value': 4, 'year': 1994},
         {'value': 5, 'year': 1995},
         {'value': 6, 'year': 1996},
         {'value': 7, 'year': 1997},
         {'value': 8, 'year': 1998},
         {'value': 9, 'year': 1999},
         {'value': 10, 'year': 2000},
         {'value': 11, 'year': 2001},
         {'value': 12, 'year': 2002},
         {'value': 13, 'year': 2003},
         {'value': 14, 'year': 2004},
         {'value': 15, 'year': 2005},
         {'value': 16, 'year': 2006},
         {'value': 17, 'year': 2007},
         {'value': 18, 'year': 2008},
         {'value': 19, 'year': 2009},
         {'value': 20, 'year': 2010},
         {'value': 21, 'year': 2011},
         {'value': 22, 'year': 2012},
         {'value': 23, 'year': 2013},
         {'value': 24, 'year': 2014}
     ];

    $scope.getAllYears = function(){
        energyDataService.getAllYears()
        .then(function(years) {
            $scope.allYearsData = years.data;
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
     };

     $scope.mapObject = {
         scope: 'usa',
         options: {
             width: 1110,
             legendHeight: 60 // optionally set the padding for the legend
         },

         fills: {
             defaultFill: '00ccff'
         },
         responsive: true,

     };

     // function submit (param1, param2, param3) {}

     $scope.updateActiveGeography = function(geography) {
        $scope.spanState = geography.properties.name;
         $scope.stateName = geography.properties.name;
         $scope.stateCode = geography.properties.stateNum;
         console.log($scope.stateCode);
         $scope.$apply();
     };

     $scope.pie1 = {};
     $scope.pie2 = {};

     $scope.pie1.labels = ["Solar", "In-Store Sales", "Mail-Order Sales"];
     $scope.pie2.labels = []
     $scope.pie1.data = [700, 500, 100];
     $scope.pie2.data = []




     parseYear2 = function (data, yearID, stateID) {
         data[yearID].state[stateID].producer[0]['Total Electric Power Industry']
     }


}]);
