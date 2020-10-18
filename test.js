
// var assert = require('assert');



describe("pow function", function() {

  before(function() {
    alert("...called the Before method");
  });

  // beforeEach(() => alert("Before a test – enter a test"));
  // afterEach(() => alert("After a test – exit a test"));

  it("2^3 should be 8", function() {
    assert.equal(pow(2, 3), 8);
   });

  it("1^2 should be 1", function() {
    assert.equal(pow(1, 2), 1);
  });

  it("0^2 should be 1", function() {
    assert.equal(pow(0, 2), 1);
  });
});