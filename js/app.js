var app=angular.module("ContactApp", ["ui.router"]);

app.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);

app.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider
    .when('','/')
    .otherwise('/notFound');

	
	$stateProvider
    .state("main", {
        url : '/',
    	templateUrl : "partials/main.html",
        controller: "MainController",
        controllerAs: "ctrl"
    })
    .state('notFound', {
        url: "/notFound",
        template : "<p class=\"label-error\">Error , Page Not found</p>"
    });
    
});





