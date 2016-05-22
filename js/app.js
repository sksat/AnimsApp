/**
*  Module
*
* Description
*/
var angapp = angular.module('animsApp', ['ngRoute','ngAnimate']);


angapp.config(function($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl:'views/home.html',
		controller: 'mainCtrl',
		css: 'css/style.css'
	})
	.when('/animals',{
		templateUrl:'views/animals.html',
		controller: 'animCtrl'
	})
	.when('/animals/:id', { 
      controller: 'photoCtrl', 
      templateUrl: 'views/animal-details.html' 
    })
	.when('/about-us',{
		templateUrl:'views/about.html',
		controller: 'aboutCtrl'
	})
	.when('/contact',{
		templateUrl:'views/contact.html',
		controller: 'contactCtrl'
	})
	.otherwise({
        redirectTo: '/'
      });
	
});

