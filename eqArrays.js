

// Assert equal Function
// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
////
/*
//make function eqArrays that takes two arrays and returns true or false based on match

// function takes two arrays as arguments
// loop through each array and compare each index to the other array
// if there is ever a missmatch quit the loop no need to go further all must be identiucal
// return true if perfect match and false if not

// edge cases?
// no entries
// too many entries
//wrong entries etc

// Note to self: try find conditions that exit the function as soon as possible example
// if you have a million elements but the first dont match dont check every other element...
*/
// function:

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




// test code:
/*
eqArrays([1, "2", 3], [1, 2, 3]) // => true
eqArrays([1, "2", 3], ["1", "2", "3"]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/


assertEqual(eqArrays([1,2,3], [1,2,3]), true); // => true
assertEqual(eqArrays([1,"2",3], [1,2,3]), true); // => false
assertEqual(eqArrays([], [1,2,3]), true); // => false
assertEqual(eqArrays([], []), true); // => true
