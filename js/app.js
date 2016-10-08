angular.module("ufcApp",["ui.router"]).config(function($stateProvider,$urlRouterProvider){

   $urlRouterProvider.otherwise('/');
$stateProvider

.state('home', {
url:'/',
templateUrl:"views/home.html",
controller:"homeCtrl"


})

.state('champions', {
url:'/champions',
templateUrl:"views/champions.html",
controller:"championsCtrl"


})

.state('news', {
url:'/news',
templateUrl:"views/news.html",
controller:"newsCtrl"


})





})
