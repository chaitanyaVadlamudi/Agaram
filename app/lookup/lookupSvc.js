(function () {
    'use strict'
    function lookupSvc($q, $http) {
        this.getCountriesFromApi = function () {
            var dfd = $q.defer();
            $http.get("app/api/countries.json")
                .then(function (response) {
                    dfd.resolve(response);
                })
                .catch(function (err) {
                    dfd.reject(err);
                });

            return dfd.promise;
        };
        
    }
    angular.module("lookup")
        .service("lookupSvc", ["$q", "$http", lookupSvc])
})();
 