	// the app module
	var mainApp = angular.module('mainApp', ['ngRoute']);

	// configured routes
	mainApp.config(function($routeProvider) {
		$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})

		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'registerController'
		})

		.when('/logout', {
			templateUrl: 'views/logout.html',
			controller: 'logoutController'	
		})

		.when('/add', {
			templateUrl: 'views/add.html',
			controller: 'addController'
		})

		.when('/profile', {
			templateUrl: 'views/profile.html',
			controller: 'profileController'
		})

		.when('/search', {
			templateUrl: 'views/search.html',
			controller: 'searchController'
		})		

		.when('/story', {
			templateUrl: 'views/story.html',
			controller: 'storyController'
		});

	});

	mainApp.controller('mainController', function($scope) {
		$scope.title = 'Welcome Home!';
		$scope.message = 'The History Graph';
	});

	mainApp.controller('loginController', function($scope) {
		$scope.title = 'Login!';
		$scope.message = 'See your profile';
	});

	mainApp.controller('registerController', function($scope) {
		$scope.title = 'Register!';
		$scope.message = 'Create an Account';
	});

	mainApp.controller('logoutController', function($scope) {
		$scope.title = 'Logout!';
		$scope.message = 'Goodbye...';
	});

	mainApp.controller('addController', function($scope) {
		$scope.title = 'Add your History!';
		$scope.message = 'Record all your old junk';
	});

	mainApp.controller('profileController', function($scope) {
		$scope.title = 'Profile!';
		$scope.message = 'Your personal page';
	});

	mainApp.controller('searchController', function($scope) {
		$scope.title = 'Search for Something!';
		$scope.message = 'Did you find it?';
	});

	mainApp.controller('storyController', function($scope) {
		$scope.title = 'Find a good story!';
		$scope.message = 'We tell good stories';
	});