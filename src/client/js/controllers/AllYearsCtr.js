
(function () {

    'use strict';

    angular
        .module('currentAmerica', [])
        .controller('AllYearCtr', AllYearsCtr);
    AllYearsCtr.$inject = [ 'energyDataService'];


    function AllYearsCtr (energyDataService) {
        var vm = this;
        console.log('Here');
        energyDataService.getAllYears()
            .then(function(data) {
                console.log('members', data);
                vm.allYears = data;
            });
    }
})();


