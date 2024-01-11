//start

/// help bits
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
    if (eqArrays(object1[key],object2[key])) {
      return true;
    } else if (object1[key] === object2[key]) {
      return true;
    } else {
      return false;
    }
    
  }

  return false;

};
// assert objects equal

const assertObjectsEqual = function(object1,object2) {

  const inspect = require("util").inspect;
  
  if (eqObjects(object1, object2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${inspect(object1)} === ${inspect(object2)} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


assertObjectsEqual({a: "2", b: "3"},{a: "2", b: "3"})//=> pass
assertObjectsEqual({a: "2", b: "3"},{a: "2", b: "4"})//=> pass

console.log(eqObjects({a: "2", b: "3"},{a: "2", b: "4"}))
