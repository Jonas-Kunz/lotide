// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("round","round");
assertEqual(1, "10");

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");