
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


