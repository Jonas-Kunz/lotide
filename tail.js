// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};





// returns all elemnets but the first:
const tail = function(arr) {
  let tailArr = arr.slice(1);
  return tailArr;
};

//test if one element array
const singleArr = tail(["test"]);
assertEqual(singleArr.length, 0);

//test empty
const mt = tail([]);
assertEqual(mt.length, 0);

//test if mutate:
const orgArr = ["yo","ho","ho"];
tail(orgArr);
assertEqual(orgArr.length, 3);

const words = tail(["Hahahah", "Bingo Bongo", "Dads"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Bingo Bongo");
assertEqual(words[1], "Dads");



