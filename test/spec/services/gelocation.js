'use strict';

describe('Service: gelocation', function () {

  // load the service's module
  beforeEach(module('RedditClientApp'));

  // instantiate service
  var gelocation;
  beforeEach(inject(function (_gelocation_) {
    gelocation = _gelocation_;
  }));

  it('should do something', function () {
    expect(!!gelocation).toBe(true);
  });

});
