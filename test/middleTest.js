const middle = require("../lib/middle");
const assertArraysEqual = require("../lib/assertArraysEqual");
/////// test code //////
assertArraysEqual((middle([1,2,3])), [2]);
assertArraysEqual((middle([1,2,3,4])), [2,3]);
assertArraysEqual((middle([1,2])), []);
assertArraysEqual((middle([])), []);