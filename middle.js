

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


// for array with one or two elements return empty array
// for array with odd num of elements return single middle element
// for even array return two middle elements
// checks if oddOrEven and outputs odd if odd can be switched with changing the 1 to a 2
const oddOrEven = function(x) {
  return (x & 1) ? true : false;
};
   
//console.log(oddOrEven(5));
//checks for middle element(s) of array
const middle = function(array) {
  // makes sure array is more than 2 and returns an empty array if NOT
  if (array.length <= 2) {
    return [];
  }
  //stores my middle elements
  let resultArr = [];
  // checks if array length is odd
  if (oddOrEven(array.length)) {
    // if odd pushes the element at the index array.length/2 rounded down into resultArr
    resultArr.push(array[Math.floor(array.length / 2)]);
  } else {
    // if even does same as above but twice but pushes array.length -1 / 2 first giving the middle two
    resultArr.push(array[Math.floor((array.length - 1) / 2)]);
    resultArr.push(array[Math.floor(array.length / 2)]);
    
  }
  //returns resultArr
  return resultArr;

};

// a litany of test cases storing my results so i can check it easier
let result1 = middle([1,2,3,4,5,6]); // => [3,4]
let result2 = middle([]); // => []
let result3 = middle([1,2,3]); // => [2]

assertArraysEqual(result1, [3,4]); // => true
assertArraysEqual(result1, [3,5]); // => false

assertArraysEqual(result2, []); // => true
assertArraysEqual(result2, [3,4]); // => false

assertArraysEqual(result3, [2]); // => true
assertArraysEqual(result3, [3,4]); // => false