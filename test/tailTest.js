
const assertEqual = require("../assertEqual")
const tail = require("../tail");

const testArr = [1,2,3,4,5];
const tailArr = tail(testArr);
const testArr2 = [1];
assertEqual(testArr2, [])
assertEqual(testArr[1], tailArr[0]);
assertEqual(testArr[2], tailArr[1]);
assertEqual(testArr[3], tailArr[2]);
assertEqual(testArr[4], tailArr[3]);
assertEqual(testArr.length, 5);