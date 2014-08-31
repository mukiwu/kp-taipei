'use strict';

describe('Service: KPAPI', function () {

  // load the service's module
  beforeEach(module('kpTaipeiApp'));

  // instantiate service
  var KPAPI;
  beforeEach(inject(function (_KPAPI_) {
    KPAPI = _KPAPI_;
  }));

  it('should do something', function () {
    expect(!!KPAPI).toBe(true);
  });

});
