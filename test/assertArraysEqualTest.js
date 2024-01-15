const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../lib/assertEqual");
/////// test code //////
assertEqual((assertArraysEqual([1],[2])), false);
assertEqual(assertArraysEqual([1],[1]), true);