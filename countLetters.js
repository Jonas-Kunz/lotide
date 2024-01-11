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
  let joinedString = stringIn//.replace(/\s/g, "");
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


//tests that I made overly complicated then had to redo
const result1 = countLetters("aa bb cb");
assertEqual(result1["a"], 2);
assertEqual(result1["b"], 3);
assertEqual(result1["c"], 1);

const result2 = countLetters("");
assertEqual(result2["a"], undefined);
assertEqual(result2["b"], undefined);
assertEqual(result2["c"], undefined);

const result3 = countLetters("aA bb cb");
assertEqual(result3["a"], 1);
assertEqual(result3["b"], 3);
assertEqual(result3["c"], 1);
assertEqual(result3["A"], 1);


