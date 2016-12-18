angular.module('ip')
	.controller('ReviewsController', ['$scope', 'ReviewsFactory', function($scope, ReviewsFactory){
		console.info("Reviews controller");

		function init() {
			ReviewsFactory.getReviews(function(results) {
				console.info('these are the reviews', results);
				$scope.reviews = results;
			})
		}


		init();
	}]);
