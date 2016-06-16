angular
  .module('currentAmerica')
  .controller('MyCtrl', MyCtrl)

MyCtrl.$inject = ['$scope', 'energyDataService', 'ngAnimate'];

function MyCtrl ($scope,  energyDataService, ngAnimate) {

  $scope.stateArr = [];
  $scope.showFilters = false;
  $scope.compareYears = false;
  $scope.compareStates = false;
  $scope.showLegends = false;
  $scope.spanState1 = "";
  $scope.spanState2 = "";
  $scope.spanYear1 = "";
  $scope.spanYear2 = "";
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

  $scope.toggleStates = function() {
    $scope.compareYears = false;
    $scope.compareStates = !$scope.compareStates;
  }
  $scope.toggleYears = function() {
    $scope.compareStates = false;
    $scope.compareYears = !$scope.compareYears;
  }

 (function getAllYears (){
      energyDataService.getAllYears()
      .then(function(years) {
          $scope.allYearsData = years.data;
      })
  })();

   function parseData (data, yearID, stateID) {
      $scope.parsed = data[yearID].state[stateID].producer[0]['Total Electric Power Industry'];
   }

  function setValues (year, state) {
    parseData($scope.allYearsData, year, state)
    var obj={};
    obj.labels = Object.keys($scope.parsed);
    obj.labels.splice(0,1);
    obj.data = obj.labels.map(function(key) {
      if (typeof $scope.parsed[key] === 'string'){
        return parseFloat($scope.parsed[key].replace(/,/g, ''));
      }
      return $scope.parsed[key];
    })
    return obj;
  }

  function bothChartsStates (year, stateArr) {
    $scope.pie1 = setValues(year, stateArr[0].stateNum);
    $scope.pie2 = setValues(year, stateArr[1].stateNum);
  }

  function bothChartsYears (year1, year2, state) {
    $scope.pie1 = setValues(year1, state);
    $scope.pie2 = setValues(year2, state);
  }


  function submitStates  () {
    $scope.showLegends = true;
        for(var i = 0; i < $scope.years.length; i++){
          if(i == $scope.data.yearSelect1){
            $scope.spanYear1 = $scope.years[i].year;
            $scope.spanYear2 = $scope.years[i].year;
          }
        }
        $scope.spanState1 = $scope.stateArr[0].name;
        $scope.spanState2 = $scope.stateArr[1].name;
        bothChartsStates($scope.data.yearSelect1, $scope.stateArr);
  }

  function submitYears () {
     $scope.showLegends = true;
        for(var i = 0; i < $scope.years.length; i++){
        if(i == $scope.data.yearSelect1){
          $scope.spanYear1 = $scope.years[i].year;
        }
        if(i == $scope.data.yearSelect2){
          $scope.spanYear2 = $scope.years[i].year;
        }
      }
      $scope.spanState1 = $scope.stateName;
      $scope.spanState2 = $scope.stateName;
      bothChartsYears($scope.data.yearSelect1, $scope.data.yearSelect2, $scope.stateCode);
    }
  }

  $scope.submit = function () {
    if ($scope.compareStates && $scope.data.yearSelect1 && $scope.stateArr[0].stateNum && $scope.stateArr[1].stateNum) {
        submitStates();
    }
    if ($scope.compareYears && $scope.data.yearSelect1 && $scope.data.yearSelect2 && $scope.stateCode) {
        submitYears ()
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

  $scope.updateActiveGeography = function(geography) {
    $scope.stateName = geography.properties.name;
    $scope.stateCode = geography.properties.stateNum;
    setStateArray(geography);
  };


  function setStateArray (geography) {
    if ($scope.stateArr.length < 2) {
      $scope.stateArr.push(geography.properties)
    } else {
      if ($scope.stateArr[0].name === geography.properties.name) {
          $scope.stateArr.splice(0,1)
      }
      if ($scope.stateArr[1].name === geography.properties.name) {
          $scope.stateArr.splice(1,1)
      }
      if ($scope.stateArr.length > 1) {
          $scope.stateArr.splice(1,1, geography.properties)
      }
    }
  }


}]);
