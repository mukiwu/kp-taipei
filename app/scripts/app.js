'use strict';

/**
 * @ngdoc overview
 * @name kpTaipeiApp
 * @description
 * # kpTaipeiApp
 *
 * Main module of the application.
 */
angular
  .module('kpTaipeiApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
