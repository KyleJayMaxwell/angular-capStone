

angular
    .module('currentAmerica')
    .controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope', '$http'];

function MyCtrl($scope, $http) {


    // when landing on the page, get all todos and show them
    $http.get('https://localhost:8888/year/1999/state')
        .success(function (data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

}

