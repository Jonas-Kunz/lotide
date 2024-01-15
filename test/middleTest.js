const middle = require("../lib/middle");
const {assert}= require("chai");

describe("#Middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepStrictEqual(middle([1,2,3]), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepStrictEqual(middle([1,2,3,4]), [2,3]); 
  });
  it("returns [] for [1,2]", () => {
    assert.deepStrictEqual(middle([1,2]), [])
  });
  it("returns [] for []", () => {
    assert.deepStrictEqual(middle([]), [])
  });
});









// assertArraysEqual((middle([1,2,3])), [2]);
// assertArraysEqual((middle([1,2,3,4])), [2,3]);
// assertArraysEqual((middle([1,2])), []);
// assertArraysEqual((middle([])), []);