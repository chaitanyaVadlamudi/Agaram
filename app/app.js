(function(){
    'use strict'
angular.module("agaramApp",["home","student","donar","volunteer","header","ui.router"]);
  angular.module("agaramApp")
     .config([ "$stateProvider",function($stateProvider){
         var basePath ="app/templates/"
         var homeObj={
             templateUrl:basePath+"home.html"
         };

          var studentObj={
             templateUrl:basePath+"student.html"
         };
         var volunteerObj={
             templateUrl:basePath+"volunteer.html"
         };
         var aboutObj={
             templateUrl:basePath+"about.html"
         };
         var contactObj={
             templateUrl:basePath+"contact.html"
         };
          var milestoneObj={
             templateUrl:basePath+"milestones.html"
         };
         
         $stateProvider.state("home",homeObj);
         $stateProvider.state("student",studentObj);
         $stateProvider.state("volunteer",volunteerObj);
         $stateProvider.state("about",aboutObj);
         $stateProvider.state("contact",contactObj);
         $stateProvider.state("milestone",milestoneObj);

     }]);

    })();