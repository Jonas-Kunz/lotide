// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


// create key by value
// take object and value as args
// return first key that contains that value
// if no key found return undefined


// function findKeyByValue
const findKeyByValue = function(objectIn, valueIn) {
  // loops through keys in objectIn
  for (let key in objectIn) {
    //checks if key matches valueIn result
    if (objectIn[key] === valueIn) {
      //console.log("Key:" + key)
      return key;
    }

  }

  return undefined;
  
};

// test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");//=> should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);//=> should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "drama");//=> should fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);//=> pass

