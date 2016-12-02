(function(){
    'use strict'
    function contactCtrl($scope){
    $scope.queryDetails={};
    $scope.registerQuery=function(){
    window.alert("Your query has been taken.You will be answered shortly.");
    console.log($scope.queryDetails)
    };
    }
    angular.module("contact")
    .controller("contactCtrl",contactCtrl)
})();