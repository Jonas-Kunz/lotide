const assertObjectsEqual = require("../lib/assertObjectsEqual");
/////// test code //////
console.log(assertObjectsEqual({1: "1", 2: "3"}, {1: "1", 2: "3"}));
console.log(assertObjectsEqual({1: "1", 2: "3"}, {1: "1", 2: "4"}));