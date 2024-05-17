const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const flatten = function (inArr) {
  const outArr = [];

  for (let elem of inArr) {
    if (!Array.isArray(elem)) {
      outArr.push(elem);
    } else {
      let nestArr = flatten(elem);

      for (let elem of nestArr) {
        outArr.push(elem);
      }
    }
  }

  return outArr;
};

// expect [1,2,3,[4,5]] to equal [1,2,3,4,5] and pass assertion
assertArraysEqual(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);
