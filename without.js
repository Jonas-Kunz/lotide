// eqArrays fort

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


// asserArraysEqual for tests

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// take in "source" array and an "itemsToRemove" array
// should return a new array with only those items from source
// that are not present in itemsToRemove array

// so i need to loop through source and pop any not in items to remove and return pop array?

const without = function(source, itemsToRemove) {
  // array to store pushed values
  let  popArr = [];
  // loops through all items in source
  for (const item of source) {
    // include checks if each item in source is in itemsToRemove
    if (!itemsToRemove.includes(item)) {
      // pushes item to array if NOT in itemsToRemove
      popArr.push(item);
    }
    
  }
  //return
  return popArr;

};

// test cases and store answer
const result1 = without([1, 2, 3], [1]); // => [2, 3]
const result2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const result3 = without(["1",2,"3"],[5]); // => ["1",2,"3"]

// checks if above tests are correct
assertArraysEqual(result1, [2,3]);
assertArraysEqual(result2, ["1","2"]);
assertArraysEqual(result3, ["1",2,"3"]);

// checks if source array has been altered
const words = ["Howdy", "World", "Dog"];
without(words, ["World"]);
assertArraysEqual(words, ["Howdy", "World", "Dog"]);
