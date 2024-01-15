const assertArraysEqual = require("./lib/assertArraysEqual");
const assertEqual = require("./lib/assertEqual");
const assertObjectsEqual =require("./lib/assertObjectsEqual");
const countLetters = require("./lib/countLetters");
const eqArrays = require("./lib/eqArrays");
const eqObjects = require("./lib/eqObjects");
const findKeyByValue = require("./lib/findKeyByValue");
const findKey = require("./lib/findKey");
const head   = require('./lib/head');
const letterPositions = require("./lib/letterPositions");
const map = require("./lib/map");
const middle = require("./lib/middle");
const tail   = require('./lib/tail');
const takeUntil = require("./lib/takeUntil");
const without = require("./lib/without");

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without 
};