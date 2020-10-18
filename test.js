
// var assert = require('assert');



describe("pow function", function() {

  before(function() {
    alert("...called the Before method");
  });


  it("2^3 should be 8", function() {
    assert.equal(pow(2, 3), 8);
   });

  it("1^2 should be 1", function() {
    assert.equal(pow(1, 2), 1);
  });

  it("0^2 should be 1", function() {
    assert.equal(pow(0, 2), 1);
  });

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});