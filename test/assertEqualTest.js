const assert = require("chai").assert;

describe("#assertEqualTest", () => {
  it("returns LHL for LHL", () => {
    assert.strictEqual("LHL", "LHL");
  });

  it("returns 1 for 1", () => {
    assert.strictEqual(1, 1); 
  });
});
