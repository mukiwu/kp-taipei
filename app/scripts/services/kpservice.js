'use strict';

/**
 * @ngdoc service
 * @name kpTaipeiApp.kpService
 * @description
 * # kpService
 * Service in the kpTaipeiApp.
 */
angular.module('kpTaipeiApp')
  .service('kpService', function kpService($http, KPAPI) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getCategory = function(id) {
      return $http({
        method:'GET',
        url: KPAPI.SERVER + 'category/' + id + '?accessToken=' + KPAPI.KEY
      });
    };

    this.getAlbums = function(id) {
      return $http({
        method:'GET',
        url: KPAPI.SERVER + 'albums/' + id + '?accessToken=' + KPAPI.KEY
      });
    };

    this.getVideos = function(id) {
      return $http({
        method:'GET',
        url: KPAPI.SERVER + 'videos/' + id + '?accessToken=' + KPAPI.KEY
      });
    };


  });
