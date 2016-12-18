angular.module('ip').factory('PrepInfoFactory', ['$http',
	function($http) {
		return {
			submitSessionRequest: function(params , callback) {
				$http.post('/prepsessions/requestSession', params)
				.success(function(res) {
					callback(res);
				})
				.error(function(res) {
					callback(res);
				});
			}
		};

	}]);
