(function () {
    'use strict'
    function volunteerCtrl($scope, lookupSvc) {
        $scope.volunteer = {};
        $scope.registerVolunteer = function () {
            console.log($scope.volunteer);
        };
        //$scope.countryList = lookupSvc.getCountryList();

         $scope.loadStateList = function () {
            var countryCode = $scope.user.country.code;
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

    angular.module("volunteer")
        .controller("volunteerCtrl",volunteerCtrl);
})();