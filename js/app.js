angular.module("ufcApp",["ui.router"]).config(function($stateProvider,$urlRouterProvider){

   $urlRouterProvider.otherwise('/');
$stateProvider

.state('home', {
url:'/',
templateUrl:"views/home.html",
controller:"homeCtrl"


})

.state('about', {
url:'/about',
templateUrl:"views/about.html",
controller:"aboutCtrl"


})

.state('contact', {
url:'/contact',
templateUrl:"views/contact.html",
controller:"contactCtrl"


})





})
