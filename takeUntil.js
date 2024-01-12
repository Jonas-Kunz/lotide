/////////////
//test BOIS
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


///
// take in two arg
//the array to work with
// the callback which tells me when
// take until should keep slicing items until the callback returns truthy
// so like arrIn = [1,2,3,4,5] => takeuntil(arr, callback(x = 3)) => arrOut = [1,2,3]
//that is i want to take an array and only retrieve values up UNTIL the specified value.

// takeUntil:
const takeUntil = function(array, callback) {

  const arrOut = [];

  for (let element of array) {

    if (callback(element)) {

      break;

    }

    arrOut.push(element);

  }

  return arrOut;

};


/// expected input:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [1, 2, 5, 7, ];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, [1,2,5,7]);

const data4 = [1, 2, 5, 7, ];
const results4 = takeUntil(data4, x => x < Infinity);
assertArraysEqual(results4, []);

