'use strict';

// Declare app level module which depends on views, and components
var eventsApp = angular.module("eventsApp",['ngResource','ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/newEvent',
    {
        templateUrl:'/app/components/version/templates/NewEvent.html',
        controller : 'EditEventController' //same as ng-controller='EditEventController'
    });
    $routeProvider.when('/event',
    {
        //foo        : 'bar',
        templateUrl:'/app/components/version/templates/EventList.html',
        controller : 'EventController' //same as ng-controller='EditEventController'
    });
    $routeProvider.otherwise({redirectTo : '/event'});// default route
    //$locationProvider.html5Mode(true); // to remove # from urls
});



