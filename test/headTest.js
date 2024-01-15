const head = require("../head");
const assert = require("chai").assert
const assertEqual = require("../assertEqual");

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
});
/////// test code //////
//assertEqual((head([1,2,3,4,5,6,7,8])), 1);