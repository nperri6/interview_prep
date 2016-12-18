angular.module('ip')
	.controller('ReviewsController', ['$scope', 'ReviewsFactory', function($scope, ReviewsFactory){
		console.info("Reviews controller");

		function init() {
			ReviewsFactory.getReviews(function(results) {
				console.info('these are the reviews', results);
				$scope.reviews = results;
			})
		}

	$scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

		init();
	}]);
