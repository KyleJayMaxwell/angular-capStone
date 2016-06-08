 angular
     .module('currentAmerica')
     .controller('MyCtrl', ['$scope', 'energyDataService',
 function($scope,  energyDataService, ngAnimate) {


    $scope.stateArr = [];
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
    $scope.getAllYears();

     $scope.parseData = function (data, yearID, stateID) {
        $scope.parsed = data[yearID].state[stateID].producer[0]['Total Electric Power Industry'];
     }

     $scope.stateArr = [];
     $scope.buildArr = function () {

     }

    function setValues (year, state) {
        $scope.parseData($scope.allYearsData, year, state)
        var obj={};
        obj.labels = Object.keys($scope.parsed);
        obj.labels.splice(0,1);
        obj.data = obj.labels.map(function(key) {
                if(typeof $scope.parsed[key] === 'string'){
                    return parseFloat($scope.parsed[key].replace(/,/g, ''));
                }
                return $scope.parsed[key];
            })
        return obj;
    }

    function bothChartsStates (year, stateArr) {
        $scope.pie1 = setValues(year, stateArr[0].stateNum);
        $scope.pie2 = setValues(year, stateArr[1].stateNum)
    }

    function bothChartsYears (year1, year2, state) {
        $scope.pie1 = setValues(year1, state);
        $scope.pie2 = setValues(year2, state);
    }

    $scope.submit = function () {

        if ($scope.compareStates && $scope.data.yearSelect1 && $scope.stateArr[0].stateNum && $scope.stateArr[1].stateNum) {
            bothChartsStates($scope.data.yearSelect1, $scope.stateArr)
          console.log('comparestatesWorks')
        }

        if ($scope.compareYears && $scope.data.yearSelect1 && $scope.data.yearSelect2 && $scope.stateCode) {
            bothChartsYears($scope.data.yearSelect1, $scope.data.yearSelect2, $scope.stateCode);
            console.log('compareYersWorks', $scope.data.yearSelect1 + $scope.data.yearSelect2 + $scope.stateCode  )
        }
    }


    //Angular-Datamaps

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

        setStateArray(geography);
    };


    function setStateArray (geography) {
        if ($scope.stateArr.length < 2) {
            $scope.stateArr.push(geography.properties)
            console.log('push', $scope.stateArr[0].stateNum)

        } else {
                if ($scope.stateArr[0].name === geography.properties.name) {
                    $scope.stateArr.splice(0,1)
                    console.log('Replaced position 1', $scope.stateArr)
                }
                if ($scope.stateArr[1].name === geography.properties.name) {
                    $scope.stateArr.splice(1,1)
                    console.log('Replaced position 2', $scope.stateArr)
                }
                if ($scope.stateArr.length > 1) {
                    $scope.stateArr.splice(1,1, geography.properties)
                    console.log('Replaced position 2 due to length', $scope.stateArr)
                }
            }

    }


}]);
