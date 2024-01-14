// START //
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

