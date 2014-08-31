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

    $scope.categories = [];
    $scope.albums = [];
    $scope.videos = [];

    kpService.getCategory('').success(function (results) {

      angular.forEach(results.data, function (category) {
        kpService.getCategory(category.id).success(function (result) {
          $scope.categories= $scope.categories.concat(result.data);
        });
      });

    });


    kpService.getAlbums('').success(function (results) {

      angular.forEach(results.data, function (albums) {
        kpService.getAlbums(albums.id).success(function (result) {
          $scope.albums= $scope.albums.concat(result.data);
        });
      });

    });


    kpService.getVideos('').success(function (results) {

      angular.forEach(results.data, function (videos) {
        kpService.getVideos(videos.id).success(function (result) {
          $scope.videos= $scope.videos.concat(result.data);
        });
      });

    });

  });
