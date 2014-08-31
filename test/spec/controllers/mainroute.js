'use strict';

describe('Controller: MainrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('kpTaipeiApp'));

  var MainrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainrouteCtrl = $controller('MainrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
