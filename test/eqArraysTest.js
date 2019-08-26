const assert = require("chai").assert;
const eqArrays = require('../eqArrays');

describe("#eqArraysTest", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [1, 2, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); 
  });
  
    it("returns true for [], []", () => {
      assert.strictEqual(eqArrays([], []), true);
  });
});
