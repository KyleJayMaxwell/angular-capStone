
angular
    .module('currentAmerica')
    .service('crudService',
        ['$http', function($http) {

            return {
                getAll: function (resource) {
                    return $http.get(resource)
                        .then(function (res) {
                            return res;
                        })
                        .catch(function (err) {
                            return err;
                        });
                },
                getOne: function (resource, payload) {
                    return $htpp.get(resource, payload)
                        .then(function (res) {
                            return res;
                        })
                        .catch(function (err) {
                            return err;
                        });
                },
                addOne: function (resource, payload) {

                    return $http.post(resource, payload)
                        .then(function (res) {
                            return res;
                        })
                        .catch(function (err) {
                            return err;
                        });
                },
                deleteOne: function (resource, payload) {
                    return $http.delete(resource + '/' + req.body._id)
                        .then(function (res) {
                            return res;
                        })
                        .catch(function (err) {
                            return err;
                        });
                },
                editOne: function (resource, payload) {
                    console.log('payload', payload);
                    return $http.put('/' + resource + '/' + payload._id, payload)

                        .then(function (res) {
                            return res;
                        })
                        .catch(function (err) {
                            return err;
                        });
                }
            };
        }]);