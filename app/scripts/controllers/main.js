'use strict';

/**
 * @ngdoc function
 * @name kpTaipeiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kpTaipeiApp
 */
angular.module('kpTaipeiApp')
  .controller('MainCtrl', function ($scope, kpService) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.category = [];

    kpService.getCategory('').success(function (results) {
    	$scope.category = results.data;

      angular.forEach($scope.category, function (category) {
        kpService.getCategory(category.id).success(function (result) {
          category.data = result.data;
        });
      });

    });


  });
