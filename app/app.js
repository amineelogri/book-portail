'use strict';

/**
 * @ngdoc overview
 * @name bookPortailApp
 * @description
 * # bookPortailApp
 *
 * Main module of the application.
 */
angular
  .module('bookPortailApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
