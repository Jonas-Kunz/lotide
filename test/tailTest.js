

const tail = require("../lib/tail");
const {assert}= require("chai");

describe("#tail", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepStrictEqual(tail([1,2,3]), [2,3]);
  });
  it("returns [] for [5]", () => {
    assert.deepStrictEqual(tail([[5]]), []); 
  });
  it("does Not Mutate the original Array", () => {
    let testArr = [1,2];
    tail(testArr);
    assert.deepStrictEqual(testArr.length, 2)
  })
});







