'use strict';

describe('Service: kpService', function () {

  // load the service's module
  beforeEach(module('kpTaipeiApp'));

  // instantiate service
  var kpService;
  beforeEach(inject(function (_kpService_) {
    kpService = _kpService_;
  }));

  it('should do something', function () {
    expect(!!kpService).toBe(true);
  });

});
