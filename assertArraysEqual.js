
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
// assertArraysEqual just calls eqArrays and prints the message from assert equal if true

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1,2,3], [1,123123,3]);
assertArraysEqual([1,2,3], []);
assertArraysEqual([], []);
assertArraysEqual([1], [1]);