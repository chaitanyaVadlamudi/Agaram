(function () {
    'use strict'
    function donorCtrl($scope, lookupSvc) {
        $scope.donor = {};
        $scope.registerDonor = function () {
            console.log($scope.donor);
        };
        //$scope.countryList = lookupSvc.getCountryList();

        $scope.loadStateList = function () {
            var countryCode = $scope.donor.country.code;
            $scope.stateList = lookupSvc.getStateListByCountry(countryCode);
        };

        lookupSvc.getCountriesFromApi()
            .then(function (response) {
                console.log(response);
                $scope.countryList = response.data.countries;
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    angular.module("donor")
        .controller("donorCtrl",donorCtrl);
})();
