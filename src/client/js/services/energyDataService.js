angular
    .module('currentAmerica')
    .service('energyDataService', energyDataService);

energyDataService.$inject = ['crudService'];



function energyDataService (crudService) {
    var url='https://localhost:8888/year/state'
    return {
        getAllYears: function () {
            return crudService.getAll(url)
                .then(function(years){
                    console.log(years);
                    return years;
                });
        },
        getOneYear: function (url, payload) {
           return crudService.getOne(url, payload)
               .then(function(years){
                   console.log(years);
                   return years;
               });
        },
        addYear: function(payload) {
            crudService.addOne(url, payload)
                .then(function(year) {
                    return year;
                })
                .catch(function (err) {
                    return err;
                });
        },
        deleteYear: function(payload) {

            crudService.deleteOne(url, payload)
                .then(function(year) {

                    return year;
                });
        },
        editYear: function(id, payload) {
            crudService.editOne(url, payload)
                .then(function(year) {
                    return year;
                })
                .catch(function (err) {
                    return err;
                });
        }
    };
};