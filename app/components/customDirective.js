(function(){
    'use strict'
    angular.module("components")
    .directive("customHeader",[function(){
        return{
            templateUrl:"app/templates/header.html",
            restrict:"A",
            link:function(scope,element,attrs){
                console.log(scope);
                console.log(element);
                console.log(attrs);
            }
        }
    }]);
})();
(function(){
    angular.module("components")
    .directive("alphabetsOnly",[function(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                element.bind("keypress",function(evt){
                    var exp=RegExp(/^[a-zA-z. ]+$/)
                    if(!exp.test(evt.key)){
                        evt.preventDefault();
                    }
                });
            }
        }
    }]);
})();

 angular.module("components")
    .directive("datepicker",[function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                
                var config ={};
                if(attrs['mindate']){
                    config.minDate=attrs["mindate"]
                }
                 if(attrs['maxdate']){
                    config.maxDate=attrs["maxdate"]
                }
                element.datepicker(config);
            }
        }
        
    }]);
angular.module("components")
.directive('stopccp', [function(){
    return {
        scope: {},
        link:function(scope,element){
            element.on('cut copy paste', function (event) {
              event.preventDefault();
            });
        }
    };
}]);