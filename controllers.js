
//CONTROLLERS

weatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('weatherController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	$scope.weatherAPI = 
	$resource("http://api.openweathermap.org/data/2.5/forecast/daily?", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});
	
	$scope.weatherResult = $scope.weatherAPI.get({ APPID: '0fc4479619874a7f6cdba46c4945b203', q: $scope.city, cnt: $scope.days  });

	$scope.convertToFarenheit = function(degK) {

		return Math.round((1.8 * (degK - 273)) +32);
	}

	$scope.convertToDate = function(dt) {

		return new Date(dt * 1000);
	}
}]);
