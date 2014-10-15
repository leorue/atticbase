	// the app module
	var mainApp = angular.module('mainApp', ['ui.router','ngResource']);

	// configured routes
	mainApp.config(function($stateProvider,$httpProvider) {
		$stateProvider

		// home page
		.state('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.state('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})

		.state('/register', {
			templateUrl: 'views/register.html',
			controller: 'registerController'
		})

		.state('/logout', {
			templateUrl: 'views/logout.html',
			controller: 'logoutController'	
		})

		.state('person',{
	        url:'/person',
	        templateUrl:'views/person.html',
	        controller:'personListController'
	    })

	    .state('viewPerson',{
	       url:'/person/:id/view',
	       templateUrl:'views/person-view.html',
	       controller:'personViewController'
	    })

	    .state('newPerson',{
	        url:'/person/new',
	        templateUrl:'views/person-add.html',
	        controller:'personCreateController'
	    })

	    .state('editPerson',{
	        url:'/person/:id/edit',
	        templateUrl:'views/person-edit.html',
	        controller:'personEditController'
	    })

		.state('/profile', {
			templateUrl: 'views/profile.html',
			controller: 'profileController'
		})

		.state('/search', {
			templateUrl: 'views/search.html',
			controller: 'searchController'
		})		

		.state('/story', {
			templateUrl: 'views/story.html',
			controller: 'storyController'
		});

	})
  
  .run(function($state){
    $state.go('person');
    $state.go('home');
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

  mainApp.controller('personListController',function($scope,$state,popupService,$window,Person){
    $scope.person=Person.query();
    $scope.deletePerson=function(person){
        if(popupService.showPopup('Really delete this?')){
            person.$delete(function(){
                $window.location.href='';
            });
        }
    }
  });

  mainApp.controller('personViewController',function($scope,$stateParams,Person){
    $scope.person=Person.get({id:$stateParams.id});
    $scope.searchFilter = function (person) {
      var keyword = new RegExp($scope.dataFilter, 'i');
      return !$scope.dataFilter || keyword.test(person.title) || keyword.test(person.director) || keyword.test(person.releaseYear) || keyword.test(person.genre);
    };
  });

  mainApp.controller('personCreateController',function($scope,$state,$stateParams,Person){
    $scope.person=new Person();
    $scope.addPerson=function(){
        $scope.person.$save(function(){
            $state.go('person');
        });
    }
  });

  mainApp.controller('personEditController',function($scope,$state,$stateParams,Person){
    $scope.updatePerson=function(){
        $scope.person.$update(function(){
            $state.go('person');
        });
    };
    $scope.loadPerson=function(){
        $scope.person=Person.get({id:$stateParams.id});
    };
    $scope.loadPerson();
  });

  mainApp.factory('Person',function($resource){
    return $resource('http://localhost:8000/api/person/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
  });

  mainApp.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
  });