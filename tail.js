// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("round","round");
assertEqual(1, "10");
*/



// returns all elemnets but the first:
const tail = function(arr) {
  let tailArr = arr.slice(1);
  return tailArr;
};

//assertEqual(tail([1,2,3,4,5]), [2,3,4,5]);
//assertEqual(tail([1,2,3,4,5]), [1,2,3,4,5]);

const words = tail(["Hahahah", "Bingo Bongo", "Dads"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Bingo Bongo");
assertEqual(words[1], "Dads");



