angular.module('ip')
	.controller('MainController', ['$scope', '$state', function($scope, $state){
		console.info("Made it ot the Main controller");
		$scope.things = ['a', 'b','c'];

		$scope.goTo = function(state) {
			$state.go(state);
		}


	}]);
