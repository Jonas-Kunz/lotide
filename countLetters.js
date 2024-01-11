// START //

// assertEqual:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// should take in string and return a count of each letter in that sentance
// use countonly style to increment results

// countLetters:
const countLetters = function(stringIn) {
  // new object to put results in
  let results = {};
  //uses RegEx magic i found on stackoveflow to remove all spaces in string
  let joinedString = stringIn.replace(/\s/g, "");
  // loops through each letter in new string
  for (const letter of joinedString) {
    // checks if results object has a key letter
    if (results[letter]) {
      // if so it increments the value by one
      results[letter] += 1;
    } else {
      // not it sets the value to 1
      results[letter] = 1;
    }

  }

  // return
  return results;

};


//tests that are overly complicated:
const result1 = (Object.values(countLetters("aa bb cb"))).toString(); // => 2,3,1
assertEqual(result1, "2,3,1");

const result2 = (Object.values(countLetters("acb"))).toString(); // => 1,1,1
assertEqual(result2, "1,1,1");

const result3 = (Object.values(countLetters(""))).toString(); // =>
assertEqual(result3, "");




