/////////////////

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

// take in an array to be altered as argument
// and a callback as argument to be preformed on  array

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {

    results.push(callback(item));

  }

  return results;

};

//test one
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g","c","t","m","t"]);
//test two
const results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
//test three
const emptyTest = [];
const results3 = map(emptyTest, word => word.toUpperCase());
console.log(results3);
assertArraysEqual(results3, []);