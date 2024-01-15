
const assertEqual = require("../lib/assertEqual")
const assertArraysEqual = require("../lib/assertArraysEqual");
const tail = require("../lib/tail");

const testArr = [1,2,3,4,5];
const tailArr = tail(testArr);
const testArr2 = [1];
const tailArr2 = tail(testArr2);
assertArraysEqual(tailArr2, [] )
assertEqual(testArr[1], tailArr[0]);
assertEqual(testArr[2], tailArr[1]);
assertEqual(testArr[3], tailArr[2]);
assertEqual(testArr[4], tailArr[3]);
//// larry this checks that the array is unmuttated!!!!
assertEqual(testArr.length, 5);