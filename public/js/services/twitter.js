angular.module('twitterService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Twitter', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/');
			},
			getTweets : function(handle) {
				return $http.post('/tweets/', handle);
			}
		}
	}]);