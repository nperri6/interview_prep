console.info("in the app.js file");

var app = angular
	.module('ip', ['ngAnimate', 'ui.router', 'templates','ui.bootstrap'] )
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider)
		{
			// Routes and States

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home.html',
					controller: 'HomeCtrl'
				})
				.state('reviews', {
					url: '/reviews',
					templateUrl: 'reviews.html',
					controller: 'ReviewsController'
				})
				.state('prepInfo', {
					url: '/prepInformation',
					templateUrl: 'prepInfo.html',
					controller: 'PrepInfoController'
				});


				    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

		});

	console.info("in the app.js file");
// app.run();
