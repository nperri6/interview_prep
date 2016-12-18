angular.module('ip')
	.controller('PrepInfoController', ['$scope', 'PrepInfoFactory', function($scope, PrepInfoFactory){
		console.info("Made it ot the prep info controller");


		function init() {
			resetSessionRequest();
			$scope.sessionConfirm = false;
		}

		$scope.submitSessionRequest = function() {
			console.info("requested session", $scope.sessionRequest);
			PrepInfoFactory.submitSessionRequest($scope.sessionRequest, function(results) {
				if (results.status="OK") {
					$scope.sessionConfirm = true;
				}
			});
		}

		function resetSessionRequest() {
			$scope.sessionRequest = {
				name: '',
				email: '',
				time: '',
				description: ''
			};
		}

		init();
	}]);
