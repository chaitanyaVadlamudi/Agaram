(function () {
    'use strict'
    function volunteerCtrl($scope, lookupSvc) {
        $scope.volunteer = {};
        $scope.registerVolunteer = function () {
            console.log($scope.volunteer);
        };
        //$scope.countryList = lookupSvc.getCountryList();

        
        lookupSvc.getCountriesFromApi()
            .then(function (response) {
                console.log(response);
                $scope.countryList = response.data.countries;
            })
            .catch(function (err) {
                console.log(err);
            });
        $scope.loadStateList=function(){
            var countryCode=$scope.user.country.code;
            $scope.stateList=lookupSvc.getStateListByCountry(countryCode);
        };
        function getStateByCountry(code) {
            var stateList = _.where(states, {
                countryCode: code
            });
            return stateList;
        }
    };

    angular.module("volunteer")
        .controller("volunteerCtrl",volunteerCtrl);
})();