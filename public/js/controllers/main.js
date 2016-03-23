angular.module('twitterController', [])
	.filter('moment', function () {
	    return function (input, momentFn) {
		    var args = Array.prototype.slice.call(arguments, 2),
		        momentObj = moment(input);
		    return momentObj[momentFn].apply(momentObj, args);
		};
	})
	.filter('tweetMentions', ['$filter', '$sce', function($filter, $sce){
		return function(text, target) {
			if (!text){
				return text;
			} 
			var replacedText = $filter('linky')(text, target);
			var targetAttr = "";
			if (angular.isDefined(target)) {
			  targetAttr = ' target="' + target + '"';
			}

			var replacePattern = /(^|\s)\@(\w*[a-zA-Z_]+\w*)/gim;
			replacedText = replacedText.replace(replacePattern, '$1<a href="https://twitter.com/$2"' + targetAttr + '>@$2</a>');

			$sce.trustAsHtml(replacedText);
			return replacedText;
	    };
	}])
	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Twitter', function($scope, $http, Twitter) {
		$scope.twitterHandle = "";
		$scope.loading = false;

		// GET =====================================================================
		//get the landing page
		Twitter.get()
			.success(function() {
				$scope.tweets = [];
			});

		// GET TWEETS ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.search = function() {
			// validate the twitterHandle to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.twitterHandle.data != undefined) {
				$scope.loading = true;
				// call the create function from our service (returns a promise object)
				Twitter.getTweets($scope.twitterHandle)
					.success(function(data) {
						$scope.loading = false;
						$scope.tweets = JSON.parse(data);
						console.log(JSON.parse(data));
					});
			}
		};
	}]);