///Start/////

// assertequal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays

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

//// requirments//
//ob eq when same num keys
// each value for key same

// eqObjects//

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {

    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }

  }

  return true;

};

console.log(eqObjects({a: "2", b: "3"},{a: "2", b: "4"}))
// test code
// primitive tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let result1 = eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
let result2 = (eqObjects(shirtObject , longSleeveShirtObject)); // => false

assertEqual(result1, true);
assertEqual(result2, false);


// // array tests
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
let result3 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
let result4 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(result3, true);
assertEqual(result4, false);

console.log(eqObjects({a: [1,3,4], b: "3"},{a: "2", b: "3"}))

