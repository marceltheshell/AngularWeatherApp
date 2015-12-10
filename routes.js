//ROUTES

weatherApp.config(function($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'partials/main.html', 
			controller: 'mainController'
		})
		.when('/weather', {
			templateUrl: 'partials/weather.html', 
			controller: 'weatherController'
		})
		.when('/weather/:days', {
			templateUrl: 'partials/weather.html', 
			controller: 'weatherController'
		});

});