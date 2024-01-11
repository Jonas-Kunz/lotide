
//assertArrayEequals test function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//equalArrays test function

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

// letter Positions Function

// need to take a string as arg,//
// loop through each index in string and 

//return object with format { letter: [1,2,3]}; etc... as in letter key and 

const letterPositions = function(sentance) {

  const results = {};

  //uses RegEx magic i found on stackoverflow to remove all spaces in string
  let joinedString = sentance.replace(/\s/g, "");
  // loops through each letter in new string
  for (let i = 0; i < joinedString.length; i++) {
    
    const letter = joinedString[i];

    if (!results[letter]) {

      results[letter] = [i];

    } else {

      results[letter].push(i);
      
    }

  }


  return results;

}

// test if simple string is done correctly
let result1 = (letterPositions("12133"))// =>{'1':[0,2], '2': [1], '3': [3,4]}
assertArraysEqual(result1["1"], [0,2]);
assertArraysEqual(result1["2"], [1]);
assertArraysEqual(result1[3], [3,4]);

// tests no string
let result2 = (letterPositions(""))//=> {}
assertArraysEqual(result2,{});
console.log(result2);

//test spaces removed 
let result3 = (letterPositions("12 133"))// =>{'1':[0,2], '2': [1], '3': [3,4]}
assertArraysEqual(result3["1"], [0,2]);
assertArraysEqual(result3["2"], [1]);
assertArraysEqual(result3[3], [3,4]);


