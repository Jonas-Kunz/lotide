
// Assert equals.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//equal arrays
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;

};
// assertArraysEqual just calls assertEqual(eqArrays(ar,arr) true)
// basically smooshes them together.

const assertArraysEqual = function(arr1, arr2) {
  assertEqual((eqArrays(arr1, arr2)), true)
};

assertArraysEqual([1,2,3], [1,123123,3]);
assertArraysEqual([1,2,3], []);
assertArraysEqual([], []);