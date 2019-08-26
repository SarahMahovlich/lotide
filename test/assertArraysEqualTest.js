const assert = require("chai").assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqualTest", () => {
  it("returns true for [1, 2, 3], [1, 2, 3] ", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for [1, 2, 3], [1, 2, 3] ", () => {
    assert.deepEqual(assertArraysEqual([], []), true);
  });
});
