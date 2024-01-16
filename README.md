# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jonaskunz/lotide`

**Require it:**

`const _ = require('@jonaskunz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual`: asserts if two arrays are identical. Ex: `assertArraysEqual([1],[1]) => true`
* `assertEqual`: asserts true if two primitive values are equal. Ex: `assertEqual(1,1) => true`
* `assertObjectsEqual`: asserts true if two objects are identical. Ex: `assertObjectsEqual({1: 2},{1: 2}) => true`
* `countLetters`: counts the frequency a given letter appears in a string. Ex: `countLetters("Hello") => {H: 1, e: 1, l: 2, o: 1}`
* `countOnly`: counts only words/letters included in count Items. Ex: `countOnly(["hello","Goodbye"], "hello) => {"hello": 1}`
* `eqArrays`: checks if two arrays are equal and returns true if so. Ex: `eqArrays([1],[1]) => true`
* `eqObjects`: returns true if two objects are equal. Ex: `eqObjects({1},{1}) => true`
* `findKeyByVlaue`: finds the first key with a given value. Ex: `findKeyByValue({1: "a", 2: "a"}, "a") => 1`
* `findKey`: Finds key for specified value Ex: `findKey({1: "a", 2: "b"}, x => x === "a") => 1`
* `head`: Returns first element of an array. Ex `head([1,2,3]) => 1`
* `letterPosition`: Returns Object displaying the index of letters. Ex: `letterPosition("Hello") => {H: [0], e: [1], l: [2,3], o: [4]}`
* `map`: Performs specified transformation on input array. Ex:
`map([1,2,3,4], x => x * 2) => [1,4,6,8]`
* `middle`: Returns middle element of an array if odd and middle two if even, returns empty array for single or no element. Ex: `middle([1,2,3]) => [2]`
* `tail`: Returns all elements but the first of an array. Ex: `tail([1,2,3]) => [2,3]`
* `takeUntil`: Returns elements from an array until a specified value. Ex: `takeUntil([1,2,3,4], x => x === 3) => [1,2,3]`
* `without`: Returns array without specified elements. EX: `without([1,2,3,4,5,6,7], [4,5,6,7]) => [1,2,3]`

## sources:
Larry Assistance for getting over some logic issues, all my assistance requests relevent to lotide should be logged with Larry