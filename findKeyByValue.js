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
  // stores result so i can continue the loop
  let result = "";
  // loops through keys in objectIn
  for (let key in objectIn) {
    //stores the key at objectIn[key] to a variable so i can use it
    let keyValue = objectIn[key];
    //checks if keyValue mathces valueIn and alters result
    if (keyValue !== valueIn) {
      //console.log("Key:" + key)
      result = undefined;
      continue;
    } else if (keyValue === valueIn) {
      //console.log("Key there" + key)
      return key;
    }
    
  }

  return result;
  
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

