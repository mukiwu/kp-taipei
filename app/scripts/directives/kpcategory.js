'use strict';

/**
 * @ngdoc directive
 * @name kpTaipeiApp.directive:kpCategory
 * @description
 * # kpCategory
 */
angular.module('kpTaipeiApp')
  .directive('kpCategory', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	console.log(scope, element, attrs);
        element.text('this is the kpCategory directive');
      }
    };
  });
