

angular
    .module('currentAmerica')
    .controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope', '$http'];

function MyCtrl($scope, $http) {


    // when landing on the page, get all data
    $http.get('http://localhost:3000/year/state')
        .then(function (data) {
            $scope.allenergy = data;
            console.log(data);
        })
        .catch(function (err) {
            console.log('Error: ' + err);
        });
//get data for single year
//     $http.get('http://localhost:3000/year/2000/state')
//         .then(function (data) {
//             $scope.allenergy = data;
//             console.log(data);
//         })
//         .catch(function (err) {
//             console.log('Error: ' + err);
//         });
    function parseData (data) {
        for (var i=0; i < data.length; i++) {
           console.log(data.data[i].yearNum)
        }
    }
    parseData(data)

}



//
// data.data['year position in array 0 =1990, 24 = 2014'].state['']


