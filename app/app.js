(function(){
    'use strict'
angular.module("agaramApp",["home","student","donor","volunteer","header","gallery","components","ui.router","lookup","contact"]);
  angular.module("agaramApp")
     .config([ "$stateProvider","$urlRouterProvider",function($stateProvider,$UrlRouterProvider){
         var basePath ="app/templates/"
         var homeObj={
             templateUrl:basePath+"home.html",
             url:"/home"
         };

          var studentObj={
             templateUrl:basePath+"student.html",
              url:"/student"
         };
         var volunteerObj={
             templateUrl:basePath+"volunteer.html",
             url:"/volunteer"
         };
         var aboutObj={
             templateUrl:basePath+"about.html",
             url:"/about"
         };
         var contactObj={
             templateUrl:basePath+"contact.html",
             url:"/contact"
         };
          var milestoneObj={
             templateUrl:basePath+"milestones.html",
              url:"/milestones"
         };
          var donorObj={
             templateUrl:basePath+"donor.html",
              url:"/donor"
         };
         var galleryObj={
             templateUrl:basePath+"gallery.html",
             url:"/gallery"
         };
         
         
         $stateProvider.state("home",homeObj);
         $stateProvider.state("student",studentObj);
         $stateProvider.state("volunteer",volunteerObj);
         $stateProvider.state("about",aboutObj);
         $stateProvider.state("contact",contactObj);
         $stateProvider.state("milestone",milestoneObj);
         $stateProvider.state("donor",donorObj);
         $stateProvider.state("gallery",galleryObj);


     }]);

    })();