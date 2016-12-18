angular.module('ip').factory('ReviewsFactory', ['$http',
	function($http) {
		return {
			getReviews: function(callback) {
				$http.post('/reviews/get')
				.success(function(res) {
					callback(res);
				})
				.error(function(res) {
					callback(res);
				});
			}
		};

	}]);
